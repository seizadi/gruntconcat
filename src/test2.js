  fs.readFile('/etc/resolv.conf', 'ascii', function(err, file) {
    if (err) {
      throw err;
    }
  });