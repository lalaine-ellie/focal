const library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               }
  };
  
  /////////////////////////////
  // FUNCTIONS TO IMPLEMENT:
  /////////////////////////////
  
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  // printPlaylists : loops through the playlists object,
  // and when it does it logs its id, name and number of tracks
  const printPlaylists = function() {
    console.log("PLAYLISTS:");
    for (let playlistId in library.playlists) {
        const playlist = library.playlists[playlistId];
        console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  };
  
  
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  // printTracks : loops through the tracks object,
  // and when it does it logs its id, name, artist and album
  const printTracks = function() {
    console.log("");
    console.log("TRACKS:");
    for (let trackID in library.tracks) {
        const track = library.tracks[trackID];
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  };
  
  
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  // printPlaylist : given a playlist ID, it logs the playlist's name and
  // number of tracks, then lists the tracks with details
  const printPlaylist = function(playlistId) {
    console.log("")
    console.log("Playlist 1:")
    const playlist = library.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);

    for (let trackID of playlist.tracks) {
        const track = library.tracks[trackID];
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  };
  
  
  // adds an existing track to an existing playlist

  // addTrackToPlaylist : adds track if it's not included yet
  const addTrackToPlaylist = function(trackId, playlistId) {
    const playlist = library.playlists[playlistID];
    if (!playlist.tracks.includes(trackId)) {
        playlist.tracks.push(trackId);
    }
  };
  
  
  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  const generateUid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  
  // adds a track to the library
  const addTrack = function(name, artist, album) {
  
  }
  
  
  // adds a playlist to the library
  const addPlaylist = function(name) {
  
  }
  
  
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  const printSearchResults = function(query) {
  
  }

  printPlaylists();
  printTracks();
  printPlaylist("p01");
  addTrackToPlaylist();