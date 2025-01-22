const library = {
    tracks: {
      t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
      t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
      t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" },
    },
  
    playlists: {
      p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
      p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
    },

  
    printPlaylists: function () {
      for (let playlistId in this.playlists) {
        const playlist = this.playlists[playlistId];
        console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
      }
    },
  
    printTracks: function () {
      for (let trackId in this.tracks) {
        const track = this.tracks[trackId];
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    },
  
    printPlaylist: function (playlistId) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
      for (let trackId of playlist.tracks) {
        const track = this.tracks[trackId];
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    },
  
    addTrackToPlaylist: function (trackId, playlistId) {
      const playlist = this.playlists[playlistId];
      if (!playlist.tracks.includes(trackId)) {
        playlist.tracks.push(trackId);
      }
    },
  
    addTrack: function (name, artist, album) {
      const trackId = this.generateUid();
      this.tracks[trackId] = { id: trackId, name, artist, album };
    },
  
    addPlaylist: function (name) {
      const playlistId = this.generateUid();
      this.playlists[playlistId] = { id: playlistId, name, tracks: [] };
    },
  
    generateUid: function () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
  
    printSearchResults: function (query) {
      const lowerQuery = query.toLowerCase();
      for (let trackId in this.tracks) {
        const track = this.tracks[trackId];
        if (
          track.name.toLowerCase().includes(lowerQuery) ||
          track.artist.toLowerCase().includes(lowerQuery) ||
          track.album.toLowerCase().includes(lowerQuery)
        ) {
          console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
        }
      }
    },
  };
  
  console.log("PRINT ALL PLAYLISTS:");
  library.printPlaylists();
  
  console.log("\nPRINT ALL TRACKS:");
  library.printTracks();
  
  console.log("\nPRINT PLAYLIST 1:");
  library.printPlaylist("p01");
  
  console.log("\nADD A NEW TRACK AND PRINT TRACKS:");
  library.addTrack("New Song", "New Artist", "New Album");
  library.printTracks();
  
  console.log("\nADD A NEW PLAYLIST AND PRINT PLAYLISTS:");
  library.addPlaylist("Chill Beats");
  library.printPlaylists();
  
  console.log("\nADD TRACK TO PLAYLIST AND PRINT PLAYLIST 2:");
  library.addTrackToPlaylist("t01", "p02");
  library.printPlaylist("p02");
  
  console.log("\nSEARCH RESULTS FOR 'View':");
  library.printSearchResults("View");
  