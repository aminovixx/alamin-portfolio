#!/usr/bin/env perl
use strict;
use warnings;
use IO::Socket::INET;

$| = 1; # autoflush

my $port = 3000;
my $doc_root = '/Users/mdalamin/.gemini/antigravity/scratch/alamin-portfolio';

my $server = IO::Socket::INET->new(
    LocalAddr => '127.0.0.1',
    LocalPort => $port,
    Proto     => 'tcp',
    Listen    => 10,
    Reuse     => 1
) or die "Cannot start server on port $port: $!\n";

print "Server running at http://localhost:$port\n";

my %mime_types = (
    'html' => 'text/html; charset=utf-8',
    'css'  => 'text/css; charset=utf-8',
    'js'   => 'application/javascript; charset=utf-8',
    'json' => 'application/json; charset=utf-8',
    'png'  => 'image/png',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'svg'  => 'image/svg+xml',
    'webp' => 'image/webp',
    'xml'  => 'application/xml',
    'txt'  => 'text/plain; charset=utf-8',
    'ico'  => 'image/x-icon',
);

while (my $client = $server->accept()) {
    my $request_line = <$client>;
    next unless $request_line;

    # Consume headers
    while (my $header = <$client>) {
        last if $header =~ /^\r?\n$/;
    }

    if ($request_line =~ m{^GET\s+([^\s?#]+)}) {
        my $path = $1;
        $path = '/index.html' if $path eq '/' or $path eq '';
        $path =~ s{\.\.}{}g; # prevent directory traversal

        my $file_path = "$doc_root$path";

        if (-f $file_path && open(my $fh, '<', $file_path)) {
            binmode $fh;
            my $content = do { local $/; <$fh> };
            close $fh;

            my ($ext) = $file_path =~ m{\.([a-zA-Z0-9]+)$};
            my $content_type = $mime_types{lc($ext // '')} || 'text/plain; charset=utf-8';
            my $len = length($content);

            print $client "HTTP/1.1 200 OK\r\n";
            print $client "Content-Type: $content_type\r\n";
            print $client "Content-Length: $len\r\n";
            print $client "Connection: close\r\n";
            print $client "\r\n";
            print $client $content;
        } else {
            my $msg = "404 Not Found\n";
            my $len = length($msg);
            print $client "HTTP/1.1 404 Not Found\r\n";
            print $client "Content-Type: text/plain\r\n";
            print $client "Content-Length: $len\r\n";
            print $client "Connection: close\r\n";
            print $client "\r\n";
            print $client $msg;
        }
    }

    close $client;
}
