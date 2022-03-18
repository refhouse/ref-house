(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_960E4357_9885_4287_41E2_E2E49A18983C]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList])",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.7,
 "minWidth": 20,
 "definitions": [{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_12_t.jpg",
 "label": "IMG_2695",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_12",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_12.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": 47.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88722CFD_9A8B_2B3A_41D9_52B60ADDC35C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_20_t.jpg",
 "label": "IMG_2906",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_20",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_20.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "sala de estar 2",
 "id": "panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 41.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -166.06,
   "panorama": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
   "distance": 1
  },
  {
   "yaw": 136.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -23.62,
   "panorama": "this.panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_tcap0",
  "this.overlay_8DCBF316_9122_9853_41D8_F4DEF4FA8398",
  "this.overlay_8F4302CA_912D_F833_41CC_5354FD4201ED"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "corredor",
 "id": "panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 86.67,
   "class": "AdjacentPanorama",
   "backwardYaw": -54.89,
   "panorama": "this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A",
   "distance": 1
  },
  {
   "yaw": -6.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 82.27,
   "panorama": "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_tcap0",
  "this.overlay_B414051A_937C_B55A_41D6_FC4973F8ABA8",
  "this.overlay_B44C5450_937F_AB26_41CA_A66D02CED771"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -21.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B129BFD_9A8B_2D3A_41D1_BDE8CC279E21",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_18_t.jpg",
 "label": "IMG_2852",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_18",
 "width": 3024,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_18.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 4032
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_960E4357_9885_4287_41E2_E2E49A18983C.ogg",
  "mp3Url": "media/audio_960E4357_9885_4287_41E2_E2E49A18983C.mp3",
  "class": "AudioResource"
 },
 "id": "audio_960E4357_9885_4287_41E2_E2E49A18983C",
 "data": {
  "label": "Feelin"
 }
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "recep\u00e7\u00e3o 2",
 "id": "panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 152.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 173.22,
   "panorama": "this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3",
   "distance": 1
  },
  {
   "yaw": -117.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 121.71,
   "panorama": "this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A",
   "distance": 1
  },
  {
   "yaw": -14.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 127.11,
   "panorama": "this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_84BB85FE_90FD_BBD3_41D0_B4ACC40FC9F1",
  "this.overlay_8333E883_90FE_A831_41B8_40F6E17EE774",
  "this.overlay_8312FFB2_90FF_6852_41CB_587DD6CE93A8",
  "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_tcap0"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -150.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88E76C88_9A8B_2BDA_416A_8EFA930D8FC8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "label": "sala 1",
 "id": "panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467",
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_tcap0"
 ],
 "hfovMin": "135%"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 135.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_888F5CB3_9A8B_2BCE_41C4_C385132B77B2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_891FFE11_9A8B_26CA_41DE_639EB86EF0DF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 142.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89A10DBD_9A8B_253A_41CC_A09BFEB0C058",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 71.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_897DDDF5_9A8B_254A_41D9_ECFDE558A2CA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 95.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8892BC97_9A8B_2BF6_41D8_D2E3C9916038",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 44.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88419CEF_9A8B_2B56_41A4_476C8B484E4D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 75.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_886F9D19_9A8B_2AFA_41CF_A52EE54C509D",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_14_t.jpg",
 "label": "IMG_2723",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_14",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_14.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_10_t.jpg",
 "label": "hygge_-125",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_10",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_10.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "initialPosition": {
  "yaw": 158.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89C5DD6C_9A8B_255A_41C5_D37F827A3CAF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 72.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_887DDD0B_9A8B_2ADE_41C1_088B34CD520C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -67.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_882BDD50_9A8B_254A_41D2_AC9D5FAD3E6A",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_19_t.jpg",
 "label": "IMG_2903",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_19",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_19.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "quarto 3",
 "id": "panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 31.4,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.92,
   "panorama": "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_tcap0",
  "this.overlay_88EF629B_9817_D644_41D3_87EEDC796765"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "banheiro",
 "id": "panorama_9CB7A43F_909B_62E3_418E_881953A1B497",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 131.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -132.02,
   "panorama": "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9CB7A43F_909B_62E3_418E_881953A1B497_tcap0",
  "this.overlay_B80C5DDC_9344_F4DF_41D9_843E5944D42D"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 116.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8CC76A59_9A8B_2F7A_41D6_1184ED7037F5",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "label": "r7",
 "id": "panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8",
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_tcap0"
 ],
 "hfovMin": "135%"
},
{
 "initialPosition": {
  "yaw": 10.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F6219F2_9A8B_2D4E_41D2_0C7CFBDA5F7A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89435DDA_9A8B_257E_41BF_8B0035D1B374",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_8E2BB930_9A8B_2AC9_41D8_C71A1E37B7BB, 0)",
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_8E2BB930_9A8B_2AC9_41D8_C71A1E37B7BB",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_25_t.jpg",
 "label": "IMG_2937",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_25",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_25.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 128.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8CE29A76_9A8B_2F36_41DE_837F01C0B011",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -95.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88184D27_9A8B_2AD6_41DB_624455DE6DDC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -98.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89971D95_9A8B_25CB_41E2_7675A591B41B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -112.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B1F9C0B_9A8B_2ADF_41DB_71AE95D464F6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 155.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_896D2E03_9A8B_26CE_41DF_59360981EBE4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_21_t.jpg",
 "label": "IMG_2911",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_21",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_21.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_8_t.jpg",
 "label": "hygge_-31",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_8",
 "width": 4584,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_8.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3056
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_17_t.jpg",
 "label": "IMG_2818",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_17",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_17.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "televisao",
 "id": "panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 81.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 110.28,
   "panorama": "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666",
   "distance": 1
  },
  {
   "yaw": -77.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -85.92,
   "panorama": "this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_tcap0",
  "this.overlay_B51D57C0_9343_B527_41D5_6D4501368418",
  "this.overlay_B4C141D9_9344_6CD9_41DE_469D49FE7BAB"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -113.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88C97C6C_9A8B_2B5A_41D5_2535D8D3EFA4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -20.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C8CFAA2_9A8B_2FC9_41C9_E93B097468F2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -58.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BB56B43_9A8B_2D4E_41D0_4F1D961A7FA2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -138.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B7E5BE1_9A8B_2D4A_41A4_1D02B6850216",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -93.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B512B8A_9A8B_2DDE_41D4_DE6A4BC4333D",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_7_t.jpg",
 "label": "hygge_-10",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_7",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "initialPosition": {
  "yaw": 41.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8CBC2AB1_9A8B_2FCB_41A2_1A5E22BB5C03",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 87.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B883B27_9A8B_2ED6_41DD_11E827DF1744",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_9_t.jpg",
 "label": "hygge_-68",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_9",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "sala 3",
 "id": "panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -173.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -24.87,
   "panorama": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
   "distance": 1
  },
  {
   "yaw": -63.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.89,
   "panorama": "this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3",
   "distance": 1
  },
  {
   "yaw": 110.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 81.14,
   "panorama": "this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_tcap0",
  "this.overlay_87654F79_90E7_68D1_41C3_CB4E0F299157",
  "this.overlay_87464A43_90E2_A832_41DA_EA4E43106958",
  "this.overlay_8BE6F100_9125_B82F_41CF_C2106E70498E"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 69.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B493BC5_9A8B_2D4A_41D2_070D77DC0D1E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Imagem 3",
 "id": "panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 13.31,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.92,
   "panorama": "this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC",
   "distance": 1
  },
  {
   "yaw": -162.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -20.54,
   "panorama": "this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_81D6B5B8_90E7_B85F_4193_B98A6D83298D",
  "this.overlay_8178681C_90E6_E857_41A0_16B631E5E90E",
  "this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_tcap0"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_8A36B459_90E4_A2AF_41D6_C5000D807445",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_camera"
  },
  {
   "media": "this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_camera"
  },
  {
   "media": "this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_camera"
  },
  {
   "media": "this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_camera"
  },
  {
   "media": "this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_camera"
  },
  {
   "media": "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_camera"
  },
  {
   "media": "this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_camera"
  },
  {
   "media": "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_camera"
  },
  {
   "media": "this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_camera"
  },
  {
   "media": "this.panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_camera"
  },
  {
   "media": "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107_camera"
  },
  {
   "media": "this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_camera"
  },
  {
   "media": "this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_camera"
  },
  {
   "media": "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_camera"
  },
  {
   "media": "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_camera"
  },
  {
   "media": "this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_camera"
  },
  {
   "media": "this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5_camera"
  },
  {
   "media": "this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_camera"
  },
  {
   "media": "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_camera"
  },
  {
   "media": "this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_camera"
  },
  {
   "media": "this.panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_camera"
  },
  {
   "media": "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_camera"
  },
  {
   "media": "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_camera"
  },
  {
   "media": "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_camera"
  },
  {
   "media": "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_camera"
  },
  {
   "media": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_camera"
  },
  {
   "media": "this.panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_camera"
  },
  {
   "media": "this.panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_camera"
  },
  {
   "media": "this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_camera"
  },
  {
   "media": "this.panorama_9CB7A43F_909B_62E3_418E_881953A1B497",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9CB7A43F_909B_62E3_418E_881953A1B497_camera"
  },
  {
   "media": "this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_camera"
  },
  {
   "media": "this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_camera"
  },
  {
   "media": "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_camera"
  },
  {
   "media": "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_camera"
  },
  {
   "media": "this.panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_camera"
  },
  {
   "media": "this.panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 0)",
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 141.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F6EFA00_9A8B_2ECA_41CB_E1C93A15CBF6",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_1_t.jpg",
 "label": "hotel barra da tijuca hygge(71)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_1",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "initialPosition": {
  "yaw": -166.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88DEFC5D_9A8B_2B7A_41E2_13B6477565CE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -69.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F1BAA10_9A8B_2ECA_41D8_E0A59B7B0A44",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_16_t.jpg",
 "label": "IMG_2789",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_16",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_16.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_15_t.jpg",
 "label": "IMG_2770",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_15",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_15.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": -31.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FAE79AB_9A8B_2DDE_41CF_6541309B0416",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "piscina",
 "id": "panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -108.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 97.22,
   "panorama": "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912",
   "distance": 1
  },
  {
   "yaw": 67.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -135.41,
   "panorama": "this.panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_tcap0",
  "this.overlay_8515D117_92DD_ED29_41BB_A490BEB4DDCD",
  "this.overlay_85F3CADA_92DC_9CDB_41D5_15BB95392635"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -118.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89DBED5E_9A8B_2576_41C5_DBCDBC500E4F",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_2_t.jpg",
 "label": "hotel barra da tijuca hygge(142)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_2",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r4",
 "id": "panorama_9BF22240_90A5_669E_41DC_CC05F5811107",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -104.01,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.52,
   "panorama": "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509",
   "distance": 1
  },
  {
   "yaw": -20.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.92,
   "panorama": "this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1",
   "distance": 1
  },
  {
   "yaw": -175.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 120.08,
   "panorama": "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107_tcap0",
  "this.overlay_8CF63067_92CC_ABE9_41D2_BD8867E17037",
  "this.overlay_8DF392A7_92C3_EF6A_41E0_A8CEB39D36E5",
  "this.overlay_8C61B909_92C4_FD39_41BF_F8CFCFE260B0"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -153.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8839AD43_9A8B_254E_41DF_BBF432355196",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R1",
 "id": "panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 12.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 158.14,
   "panorama": "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97",
   "distance": 1
  },
  {
   "yaw": -84.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -20.1,
   "panorama": "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_tcap0",
  "this.overlay_8DE455BA_92C4_B55A_41D2_9FB543016DB6",
  "this.overlay_8DAF3FA6_92C7_956A_41C6_46A24A2A63F0"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "recep\u00e7\u00e3o 3",
 "id": "panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 173.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 152.49,
   "panorama": "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78",
   "distance": 1
  },
  {
   "yaw": -2.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -63.94,
   "panorama": "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_tcap0",
  "this.overlay_8601E2AA_90E5_9872_41D3_328C9A647E7B",
  "this.overlay_87871610_90E6_F82F_41CA_F02426250C24"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "editada 2 1",
 "id": "panorama_8A36B459_90E4_A2AF_41D6_C5000D807445",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0",
  "this.overlay_8E634540_9831_F2C5_41D6_60A2C2EEB80A"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -52.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BB9CB52_9A8B_2D4E_41D4_077ACC314D46",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_4_t.jpg",
 "label": "hotel barra da tijuca hygge(238)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_4",
 "width": 3680,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2760
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Imagem 2",
 "id": "panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 163.92,
   "class": "AdjacentPanorama",
   "backwardYaw": 13.31,
   "panorama": "this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C",
   "distance": 1
  },
  {
   "panorama": "this.panorama_8A36B459_90E4_A2AF_41D6_C5000D807445",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_835241BF_90E5_9852_41DF_CAD3B5D9B3B7",
  "this.overlay_84E84F25_90E2_A876_41C1_88B464BBC32E",
  "this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_tcap0"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -48.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8CAEEAC0_9A8B_2F4A_41D2_36C619F11240",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r2",
 "id": "panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -107.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -57.41,
   "panorama": "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509",
   "distance": 1
  },
  {
   "yaw": 158.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.43,
   "panorama": "this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1",
   "distance": 1
  },
  {
   "yaw": -21.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 148.47,
   "panorama": "this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_tcap0",
  "this.overlay_880D9FA6_92C4_956B_41E1_05202A2C9B3B",
  "this.overlay_8EF67B0A_92C3_FD3A_41C3_C17F6BD852A1",
  "this.overlay_8E9EA70B_92CC_F53A_41DE_7893D38C5152"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "quarto 2",
 "id": "panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 43.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -138.93,
   "panorama": "this.panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2",
   "distance": 1
  },
  {
   "yaw": -132.02,
   "class": "AdjacentPanorama",
   "backwardYaw": 131.64,
   "panorama": "this.panorama_9CB7A43F_909B_62E3_418E_881953A1B497",
   "distance": 1
  },
  {
   "yaw": -44.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.7,
   "panorama": "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_tcap0",
  "this.overlay_BA704A20_937D_9F66_41C5_5CE2F25D3B28",
  "this.overlay_BD43DCBA_937C_7B5B_41D3_1CA018A7E969",
  "this.overlay_B95FE890_9343_9B26_41E0_995274EC6985"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -59.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_889D4CA5_9A8B_2BCA_41D3_ED5CD445EF96",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -167.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FA0199D_9A8B_2DFA_41E1_65118C920FC8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 122.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FBBC98F_9A8B_2DD6_41B0_C12A3462B23A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -59.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88086D35_9A8B_2ACA_41C5_D5EA91FFD864",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r3",
 "id": "panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -57.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -107.78,
   "panorama": "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97",
   "distance": 1
  },
  {
   "yaw": 29.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -104.01,
   "panorama": "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107",
   "distance": 1
  },
  {
   "yaw": 120.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 84.16,
   "panorama": "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_tcap0",
  "this.overlay_8E805606_92CC_772B_41CB_491E41E851F2",
  "this.overlay_8E2D97F1_92CF_94E6_41A2_D023AC1252F9",
  "this.overlay_8FE74B61_92CC_9DE9_41C4_7FB216D59ADB"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 102.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8953EDCB_9A8B_255E_41DC_BA2152FB481B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 4.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C92FA85_9A8B_2FCA_41A5_79A0F9E1F2A9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "piscina 6",
 "id": "panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -111.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 60.29,
   "panorama": "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3",
   "distance": 1
  },
  {
   "yaw": 61.42,
   "class": "AdjacentPanorama",
   "backwardYaw": -114.31,
   "panorama": "this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_tcap0",
  "this.overlay_8B505E60_92C5_97E6_41C5_65450634C991",
  "this.overlay_88787279_92C4_6FD9_41D3_858D9D19FB5A"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -6.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BB36B35_9A8B_2ECA_41E1_BD30D68C3C11",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r5",
 "id": "panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 120.08,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.73,
   "panorama": "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107",
   "distance": 1
  },
  {
   "yaw": 26.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.53,
   "panorama": "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1",
   "distance": 1
  },
  {
   "yaw": -58.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.15,
   "panorama": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_tcap0",
  "this.overlay_B2EB2267_9344_AFEA_41C3_0FD8CB89E67B",
  "this.overlay_B0222432_9347_AB6B_41DB_0C339B541A06",
  "this.overlay_B2C0E1D2_9344_AD2B_41C9_44DD3DA861AC"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Imagem 4",
 "id": "panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -20.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -162.92,
   "panorama": "this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C",
   "distance": 1
  },
  {
   "yaw": 158.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -51.75,
   "panorama": "this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_806354D3_90E3_99D2_41C0_E37993550746",
  "this.overlay_81BD649B_90E5_9852_41C8_E09C38438DFC",
  "this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_tcap0"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Imagem 5",
 "id": "panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 127.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.95,
   "panorama": "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78",
   "distance": 1
  },
  {
   "yaw": -51.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 158.83,
   "panorama": "this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_8302CCAF_90E3_6872_41DD_844B35220DCD",
  "this.overlay_83FBF43D_90E2_9856_41DD_1A5E39B567F6",
  "this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_tcap0"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_5_t.jpg",
 "label": "hotel barra da tijuca hygge(261)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_5",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "initialPosition": {
  "yaw": 71.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B3E4C35_9A8B_2ACB_41C4_4346F353BF10",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r6",
 "id": "panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 84.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 120.58,
   "panorama": "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509",
   "distance": 1
  },
  {
   "yaw": 161.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.25,
   "panorama": "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD",
   "distance": 1
  },
  {
   "yaw": -110.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 112.67,
   "panorama": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_tcap0",
  "this.overlay_B1A7A074_9345_EBEF_41D2_B12213319657",
  "this.overlay_B0359A09_9344_BF39_41A0_26FEF4FA86C5",
  "this.overlay_B7A02DD0_9343_9527_41A8_667575523689"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -119.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B24FC42_9A8B_2B4E_41D7_8B077D71F4F2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "piscina 4",
 "id": "panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -114.31,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.42,
   "panorama": "this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA",
   "distance": 1
  },
  {
   "yaw": 148.47,
   "class": "AdjacentPanorama",
   "backwardYaw": -21.61,
   "panorama": "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_tcap0",
  "this.overlay_89EB0EAE_92C4_777A_41C4_90C433BDFA67",
  "this.overlay_882362B2_92C4_AF6B_41C9_ECA2ADED216B"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -97.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F42A9C7_9A8B_2D56_41D9_C91FF789147A",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "ponta piscina 1",
 "id": "panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -135.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 67.45,
   "panorama": "this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_tcap0",
  "this.overlay_8AF43F9E_92DC_755B_41D4_D405FB54F236"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "churrasco",
 "id": "panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 170.58,
   "class": "AdjacentPanorama",
   "backwardYaw": -37.94,
   "panorama": "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F",
   "distance": 1
  },
  {
   "yaw": -85.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -77.25,
   "panorama": "this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_tcap0",
  "this.overlay_87FA2EBA_92C4_B75B_41DB_1E98B741A630",
  "this.overlay_8787095A_92C5_9DDA_41E1_17C2D04B3A6D"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_24_t.jpg",
 "label": "IMG_2932",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_24",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_24.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_11_t.jpg",
 "label": "hygge_-351",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_11",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_11.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_13_t.jpg",
 "label": "IMG_2702",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_13",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_13.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_0_t.jpg",
 "label": "hotel barra da tijuca hygge(49)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_0",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 62.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BAF6B7C_9A8B_2D3A_41E1_D5CD1CEE49B7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 10.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F7539E3_9A8B_2D4E_41E2_61DB547D0616",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE304E6_90A5_6362_41D5_1864029665F5_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -21.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F35EA2D_9A8B_2EDA_41D1_4AF1105B096A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 6.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B70EBD3_9A8B_2D4E_41E1_2409813CBBA2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -27.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8CD69A4B_9A8B_2F5E_41E1_EEC9AC75C5F8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 159.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F255A3C_9A8B_2F3A_41CE_6D3A8E530296",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_6_t.jpg",
 "label": "hygge_-10 (1)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_6",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "piscina 7",
 "id": "panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 60.29,
   "class": "AdjacentPanorama",
   "backwardYaw": -111.55,
   "panorama": "this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA",
   "distance": 1
  },
  {
   "yaw": -38.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -108.4,
   "panorama": "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F",
   "distance": 1
  },
  {
   "yaw": 148.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -24.5,
   "panorama": "this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_tcap0",
  "this.overlay_8A5C4535_92DD_B569_41E1_0A267158FA15",
  "this.overlay_8B3CB3DE_92DC_6CDA_41CC_5B4F2910332E",
  "this.overlay_88CC831C_92C3_AD5E_41C6_BE93F4B72E81"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 156.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BA43B6E_9A8B_2D56_41DE_34DBA4E0CBCB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 155.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89F5ED7A_9A8B_253E_41BB_F5E2339BEB23",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -82.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8856DCE1_9A8B_2B4A_41E1_AD311B207673",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 13.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BA38B5F_9A8B_2D76_41D6_537495608957",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -44.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B5EDBA6_9A8B_2DD6_41CD_D0CD9926ED01",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_8A36B459_90E4_A2AF_41D6_C5000D807445",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_camera"
  },
  {
   "media": "this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_camera"
  },
  {
   "media": "this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_camera"
  },
  {
   "media": "this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_camera"
  },
  {
   "media": "this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_camera"
  },
  {
   "media": "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_camera"
  },
  {
   "media": "this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_camera"
  },
  {
   "media": "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_camera"
  },
  {
   "media": "this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_camera"
  },
  {
   "media": "this.panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_camera"
  },
  {
   "media": "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107_camera"
  },
  {
   "media": "this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_camera"
  },
  {
   "media": "this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_camera"
  },
  {
   "media": "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_camera"
  },
  {
   "media": "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_camera"
  },
  {
   "media": "this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_camera"
  },
  {
   "media": "this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5_camera"
  },
  {
   "media": "this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_camera"
  },
  {
   "media": "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_camera"
  },
  {
   "media": "this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_camera"
  },
  {
   "media": "this.panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_camera"
  },
  {
   "media": "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_camera"
  },
  {
   "media": "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_camera"
  },
  {
   "media": "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_camera"
  },
  {
   "media": "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_camera"
  },
  {
   "media": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_camera"
  },
  {
   "media": "this.panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_camera"
  },
  {
   "media": "this.panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_camera"
  },
  {
   "media": "this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_camera"
  },
  {
   "media": "this.panorama_9CB7A43F_909B_62E3_418E_881953A1B497",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9CB7A43F_909B_62E3_418E_881953A1B497_camera"
  },
  {
   "media": "this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_camera"
  },
  {
   "media": "this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_camera"
  },
  {
   "media": "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_camera"
  },
  {
   "media": "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_camera"
  },
  {
   "media": "this.panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_camera"
  },
  {
   "media": "this.panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_camera"
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "displayOriginPosition": {
  "yaw": -153.8,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": -153.8,
  "class": "PanoramaCameraPosition",
  "pitch": -9.16
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -9.16,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9CB7A43F_909B_62E3_418E_881953A1B497_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 165.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B6B5BEF_9A8B_2D56_41D8_F6D4C07B343C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8987EDA3_9A8B_25CF_41E1_81A5BAE4E57D",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_3_t.jpg",
 "label": "hotel barra da tijuca hygge(185)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_3",
 "width": 5472,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3648
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "quarto 4",
 "id": "panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -92.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -44.85,
   "panorama": "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546",
   "distance": 1
  },
  {
   "yaw": 163.92,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.4,
   "panorama": "this.panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC",
   "distance": 1
  },
  {
   "yaw": 82.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.16,
   "panorama": "this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_tcap0",
  "this.overlay_BB7EF672_937C_B7EB_41D9_78E92E5997F0",
  "this.overlay_BBC1B471_937C_6BE6_41D9_CE6E956A0340",
  "this.overlay_8A640D7B_9830_52BB_41C7_E2ED15CB60C1"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -18.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C9CCA94_9A8B_2FCA_41D1_B3FC5C81EFA9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 168.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B05EC19_9A8B_2AFB_41BA_F8E8CC4A1D80",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "piscina 2",
 "id": "panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -169.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 73.98,
   "panorama": "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F",
   "distance": 1
  },
  {
   "yaw": 97.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -108.28,
   "panorama": "this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_tcap0",
  "this.overlay_84F7C335_92C3_AD69_41CF_B5FA29218288",
  "this.overlay_8460CD9F_92DC_955A_41CE_B74F987CDAB5"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 173.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88A41CD1_9A8B_2B4A_41D0_BE82EC736407",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -148.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88BBACC2_9A8B_2B4E_41D7_3DC0089C8558",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -31.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88F4AC7A_9A8B_2B3E_41DE_121C367D3D93",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "piscina 5",
 "id": "panorama_9BE304E6_90A5_6362_41D5_1864029665F5",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 135.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 66.7,
   "panorama": "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
   "distance": 1
  },
  {
   "yaw": -24.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 148.59,
   "panorama": "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5_tcap0",
  "this.overlay_82F68F28_92C4_9566_4182_89B71B87F9CE",
  "this.overlay_80EFD21A_92CC_6F5A_41C1_831AB8A10E88"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 125.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F5B79B9_9A8B_2D3A_41D2_F3BA0449F42F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r8",
 "id": "panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 66.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.66,
   "panorama": "this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5",
   "distance": 1
  },
  {
   "yaw": 159.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -58.54,
   "panorama": "this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD",
   "distance": 1
  },
  {
   "yaw": 112.67,
   "class": "AdjacentPanorama",
   "backwardYaw": -110.54,
   "panorama": "this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1",
   "distance": 1
  },
  {
   "yaw": -24.87,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.6,
   "panorama": "this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666",
   "distance": 1
  },
  {
   "yaw": -166.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 41.32,
   "panorama": "this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_tcap0",
  "this.overlay_8A7EB608_9127_B83E_41D6_ABF06432F7B2",
  "this.overlay_8BCA727C_9127_78D6_41CC_80AF6D50B3E8",
  "this.overlay_8AD996EB_9125_B9F2_41AC_E20CDDA046BC",
  "this.overlay_8CFA1091_9123_982E_41D0_B2C661B224CA",
  "this.overlay_B7CB24F6_9345_94EB_41BD_E790E2AA5025"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "sala de estar",
 "id": "panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -23.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 136.54,
   "panorama": "this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_tcap0",
  "this.overlay_84D4645C_92C4_ABDE_41E1_BDE7FF52B970"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 177.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89E7CD87_9A8B_25D7_41CA_1454F284A24F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "piscina 3",
 "id": "panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -37.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 170.58,
   "panorama": "this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A",
   "distance": 1
  },
  {
   "yaw": 73.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.7,
   "panorama": "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912",
   "distance": 1
  },
  {
   "yaw": 73.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.7,
   "panorama": "this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912",
   "distance": 1
  },
  {
   "yaw": -108.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.69,
   "panorama": "this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_tcap0",
  "this.overlay_817553AC_92C3_AD7E_41CA_9D75D2A01917",
  "this.overlay_8692D796_92C5_952A_41BE_3A9E49129629",
  "this.overlay_863A2681_92C7_B726_41CB_D7DE252ACFDF"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 17.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8CF0DA68_9A8B_2F5A_41E1_3B502A316105",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -136.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B544B98_9A8B_2DFA_41E2_EEFB1E8DB2BE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 159.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_89B1FDB0_9A8B_25CA_41E0_F923EA4D5F4E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "corredor 2",
 "id": "panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 121.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -117.45,
   "panorama": "this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78",
   "distance": 1
  },
  {
   "yaw": -54.89,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.67,
   "panorama": "this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_tcap0",
  "this.overlay_B5E355C0_9343_9527_41E1_373952AB1AE3",
  "this.overlay_B4F3E794_937C_752F_41D8_A6D3392586EC"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "quarto",
 "id": "panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -138.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 43.84,
   "panorama": "this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546",
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_tcap0",
  "this.overlay_8A84B8C2_9810_F3C4_41B7_BD4126FF101B"
 ],
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": -106.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B32DC27_9A8B_2AD7_41B5_676E1148493A",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_22_t.jpg",
 "label": "IMG_2918",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_22",
 "width": 4032,
 "image": {
  "levels": [
   {
    "url": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_22.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 68.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_894D9DE7_9A8B_2556_41D1_13DBD164CE62",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 121.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B418BB5_9A8B_2DCA_41D6_BDE60703F9A3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -9.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F4FD9D5_9A8B_2D4A_41D6_5475FA9F246F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF22240_90A5_669E_41DC_CC05F5811107_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 94.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F0B3A1E_9A8B_2EF6_41D7_53E50F50F305",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/album_8E10D57B_9810_32BB_41D8_C444FB9DE425_t.png",
 "label": "\u00c1lbum de Fotos hotel barra da tijuca hygge(49)",
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425",
 "class": "PhotoAlbum",
 "playList": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": 65.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_88D03C50_9A8B_2B4A_41E1_73B6FBBA0ACA",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 7,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "inertia": false,
 "id": "panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.2,
   "yaw": 136.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6, this.camera_8BA43B6E_9A8B_2D56_41DE_34DBA4E0CBCB); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C05CDBB_9810_4DBB_41D8_35EC391891D4",
   "pitch": -27.96,
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 136.54,
   "distance": 100
  }
 ],
 "id": "overlay_8DCBF316_9122_9853_41D8_F4DEF4FA8398",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.67,
   "yaw": 41.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714, this.camera_8BA38B5F_9A8B_2D76_41D6_537495608957); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C053DBB_9810_4DBB_41E1_CF51CD2FEA30",
   "pitch": -22.56,
   "hfov": 10.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 41.32,
   "distance": 100
  }
 ],
 "id": "overlay_8F4302CA_912D_F833_41CC_5354FD4201ED",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.34,
   "yaw": 86.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A, this.camera_8F5B79B9_9A8B_2D3A_41D2_F3BA0449F42F); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C369DC9_9810_4DC7_41D7_83ED7F535721",
   "pitch": -16.78,
   "hfov": 10.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 86.67,
   "distance": 100
  }
 ],
 "id": "overlay_B414051A_937C_B55A_41D6_FC4973F8ABA8",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.8,
   "yaw": -6.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92, this.camera_8F42A9C7_9A8B_2D56_41D9_C91FF789147A); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C36CDC9_9810_4DC7_41C1_257163CFCC30",
   "pitch": -27.46,
   "hfov": 9.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.16,
   "distance": 100
  }
 ],
 "id": "overlay_B44C5450_937F_AB26_41CA_A66D02CED771",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.53,
   "yaw": -14.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89, this.camera_8BB9CB52_9A8B_2D4E_41D4_077ACC314D46); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C089DB8_9810_5245_41D2_AD83154B2D8A",
   "pitch": -23.31,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.95,
   "distance": 100
  }
 ],
 "id": "overlay_84BB85FE_90FD_BBD3_41D0_B4ACC40FC9F1",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.08,
   "yaw": 152.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3, this.camera_8BB36B35_9A8B_2ECA_41E1_BD30D68C3C11); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C08ADB9_9810_5247_41C8_E93EFE641E86",
   "pitch": -19.42,
   "hfov": 12.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 152.49,
   "distance": 100
  }
 ],
 "id": "overlay_8333E883_90FE_A831_41B8_40F6E17EE774",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.89,
   "yaw": -117.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A, this.camera_8BB56B43_9A8B_2D4E_41D0_4F1D961A7FA2); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C080DB9_9810_5247_41B4_E4E2569E0F22",
   "pitch": -29.84,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -117.45,
   "distance": 100
  }
 ],
 "id": "overlay_8312FFB2_90FF_6852_41CB_587DD6CE93A8",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE54C5A_90A4_E2AD_41B0_D2CC49360467_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "inertia": false,
 "id": "panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.2,
   "yaw": 31.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92, this.camera_89435DDA_9A8B_257E_41BF_8B0035D1B374); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8DE464E7_9830_53CB_41A5_ECC7593C1ADB",
   "pitch": -30.22,
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.4,
   "distance": 100
  }
 ],
 "id": "overlay_88EF629B_9817_D644_41D3_87EEDC796765",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9CB7A43F_909B_62E3_418E_881953A1B497_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.4,
   "yaw": 131.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546, this.camera_88722CFD_9A8B_2B3A_41D9_52B60ADDC35C); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D99B4E4_9830_53CD_41E2_65FAAC2BA8DB",
   "pitch": -22.06,
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 131.64,
   "distance": 100
  }
 ],
 "id": "overlay_B80C5DDC_9344_F4DF_41D9_843E5944D42D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE57228_90A4_A6ED_41D6_ACF354C477F8_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.3,
   "yaw": -77.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A, this.camera_8F0B3A1E_9A8B_2EF6_41D7_53E50F50F305); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C350DC7_9810_4DCB_41E1_60F2CE96D3BF",
   "pitch": -28.09,
   "hfov": 9.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.25,
   "distance": 100
  }
 ],
 "id": "overlay_B51D57C0_9343_B527_41D5_6D4501368418",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.07,
   "yaw": 81.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666, this.camera_8F1BAA10_9A8B_2ECA_41D8_E0A59B7B0A44); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C356DC8_9810_4DC5_41E1_8CC85651DA81",
   "pitch": -20.3,
   "hfov": 11.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.14,
   "distance": 100
  }
 ],
 "id": "overlay_B4C141D9_9344_6CD9_41DE_469D49FE7BAB",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.74,
   "yaw": -63.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3, this.camera_89E7CD87_9A8B_25D7_41CA_1454F284A24F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0A9DBA_9810_5245_41CB_7FEEF36536C6",
   "pitch": -21.55,
   "hfov": 10.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.94,
   "distance": 100
  }
 ],
 "id": "overlay_87654F79_90E7_68D1_41C3_CB4E0F299157",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.35,
   "yaw": 110.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9, this.camera_89971D95_9A8B_25CB_41E2_7675A591B41B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0AADBA_9810_5245_41D9_785EEBFBA202",
   "pitch": -15.27,
   "hfov": 12.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 110.28,
   "distance": 100
  }
 ],
 "id": "overlay_87464A43_90E2_A832_41DA_EA4E43106958",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.76,
   "yaw": -173.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714, this.camera_89F5ED7A_9A8B_253E_41BB_F5E2339BEB23); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0A2DBA_9810_5245_41B8_B2AE3D01778F",
   "pitch": -27.96,
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.6,
   "distance": 100
  }
 ],
 "id": "overlay_8BE6F100_9125_B82F_41CF_C2106E70498E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.24,
   "yaw": 13.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC, this.camera_8987EDA3_9A8B_25CF_41E1_81A5BAE4E57D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0F5DB7_9810_524B_41D5_9109D2E08B0E",
   "pitch": -17.79,
   "hfov": 11.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 13.31,
   "distance": 100
  }
 ],
 "id": "overlay_81D6B5B8_90E7_B85F_4193_B98A6D83298D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.77,
   "yaw": -162.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C, this.camera_89B1FDB0_9A8B_25CA_41E0_F923EA4D5F4E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0E9DB7_9810_524B_41C0_8D0D04CB3A0A",
   "pitch": -12.76,
   "hfov": 10.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.92,
   "distance": 100
  }
 ],
 "id": "overlay_8178681C_90E6_E857_41A0_16B631E5E90E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.99,
   "yaw": -108.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912, this.camera_8856DCE1_9A8B_2B4A_41E1_AD311B207673); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3C9DC1_9810_4DC7_41E1_E5C5F6E1B0B8",
   "pitch": -27.84,
   "hfov": 9.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -108.28,
   "distance": 100
  }
 ],
 "id": "overlay_8515D117_92DD_ED29_41BB_A490BEB4DDCD",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.95,
   "yaw": 67.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82, this.camera_88419CEF_9A8B_2B56_41A4_476C8B484E4D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3CEDC2_9810_4DC5_41D4_7237B252C0A7",
   "pitch": -19.29,
   "hfov": 9.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 67.45,
   "distance": 100
  }
 ],
 "id": "overlay_85F3CADA_92DC_9CDB_41D5_15BB95392635",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF22240_90A5_669E_41DC_CC05F5811107_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.81,
   "yaw": -20.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1, this.camera_8892BC97_9A8B_2BF6_41D8_D2E3C9916038); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C04FDBC_9810_4DBD_41D6_DFDCF3726047",
   "pitch": -29.72,
   "hfov": 9.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.1,
   "distance": 100
  }
 ],
 "id": "overlay_8CF63067_92CC_ABE9_41D2_BD8867E17037",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.51,
   "yaw": -104.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509, this.camera_88E76C88_9A8B_2BDA_416A_8EFA930D8FC8); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C042DBC_9810_4DBD_41D8_C52F02B63F69",
   "pitch": -31.35,
   "hfov": 10.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -104.01,
   "distance": 100
  }
 ],
 "id": "overlay_8DF392A7_92C3_EF6A_41E0_A8CEB39D36E5",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.97,
   "yaw": -175.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD, this.camera_889D4CA5_9A8B_2BCA_41D3_ED5CD445EF96); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C078DBC_9810_4DBD_41E2_FD0249495F96",
   "pitch": -30.35,
   "hfov": 9.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.73,
   "distance": 100
  }
 ],
 "id": "overlay_8C61B909_92C4_FD39_41BF_F8CFCFE260B0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.93,
   "yaw": -84.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107, this.camera_8F255A3C_9A8B_2F3A_41CE_6D3A8E530296); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C073DBC_9810_4DBD_41E0_5FB8447994DC",
   "pitch": -34.24,
   "hfov": 8.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.92,
   "distance": 100
  }
 ],
 "id": "overlay_8DE455BA_92C4_B55A_41D2_9FB543016DB6",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.19,
   "yaw": 12.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97, this.camera_8F35EA2D_9A8B_2EDA_41D1_4AF1105B096A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C06BDBD_9810_4DBF_41AD_BFE28AF7FB62",
   "pitch": -23.82,
   "hfov": 9.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.43,
   "distance": 100
  }
 ],
 "id": "overlay_8DAF3FA6_92C7_956A_41C6_46A24A2A63F0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.61,
   "yaw": -2.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666, this.camera_8CC76A59_9A8B_2F7A_41D6_1184ED7037F5); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0BADB9_9810_5247_41D4_D3CEE689A516",
   "pitch": -22.43,
   "hfov": 11.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.89,
   "distance": 100
  }
 ],
 "id": "overlay_8601E2AA_90E5_9872_41D3_328C9A647E7B",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.71,
   "yaw": 173.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78, this.camera_8CD69A4B_9A8B_2F5E_41E1_EEC9AC75C5F8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0B1DB9_9810_5247_41C8_CBA6C557633A",
   "pitch": -20.43,
   "hfov": 12.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.22,
   "distance": 100
  }
 ],
 "id": "overlay_87871610_90E6_F82F_41CA_F02426250C24",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.36,
   "yaw": -158.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC, this.camera_8B05EC19_9A8B_2AFB_41BA_F8E8CC4A1D80); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D485648_9830_DEC5_41D2_616FEFBD4646",
   "pitch": -11.25,
   "hfov": 9.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -158.4,
   "distance": 100
  }
 ],
 "id": "overlay_8E634540_9831_F2C5_41D6_60A2C2EEB80A",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 163.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C, this.camera_88DEFC5D_9A8B_2B7A_41E2_13B6477565CE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0F8DB6_9810_524D_41D4_09A39214BEE3",
   "pitch": -10.5,
   "hfov": 9.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 163.92,
   "distance": 100
  }
 ],
 "id": "overlay_835241BF_90E5_9852_41DF_CAD3B5D9B3B7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.69,
   "yaw": -16.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0FDDB7_9810_524B_41D2_8F056B8FB8D6",
   "pitch": -25.07,
   "hfov": 10.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.58,
   "distance": 100
  }
 ],
 "id": "overlay_84E84F25_90E2_A876_41C1_88B464BBC32E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.5,
   "yaw": -21.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7, this.camera_8FAE79AB_9A8B_2DDE_41CF_6541309B0416); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3FCDC2_9810_4DC5_41A1_3B1068FAB6F9",
   "pitch": -27.21,
   "hfov": 10.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -21.61,
   "distance": 100
  }
 ],
 "id": "overlay_880D9FA6_92C4_956B_41E1_05202A2C9B3B",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.61,
   "yaw": 158.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1, this.camera_8FA0199D_9A8B_2DFA_41E1_65118C920FC8); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3F2DC3_9810_4DCB_41DC_E239C5D300FE",
   "pitch": -28.34,
   "hfov": 10.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.14,
   "distance": 100
  }
 ],
 "id": "overlay_8EF67B0A_92C3_FD3A_41C3_C17F6BD852A1",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.68,
   "yaw": -107.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509, this.camera_8FBBC98F_9A8B_2DD6_41B0_C12A3462B23A); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3E8DC3_9810_4DCB_41A7_11EB43438BFD",
   "pitch": -26.33,
   "hfov": 9.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -107.78,
   "distance": 100
  }
 ],
 "id": "overlay_8E9EA70B_92CC_F53A_41DE_7893D38C5152",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.86,
   "yaw": -44.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92, this.camera_8B883B27_9A8B_2ED6_41DD_11E827DF1744); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C316DCA_9810_4DC5_41D3_487CC08DB3D8",
   "pitch": -26.83,
   "hfov": 9.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.85,
   "distance": 100
  }
 ],
 "id": "overlay_BA704A20_937D_9F66_41C5_5CE2F25D3B28",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.28,
   "yaw": 43.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2, this.camera_8CBC2AB1_9A8B_2FCB_41A2_1A5E22BB5C03); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C300DCA_9810_4DC5_41AB_320C468C9615",
   "pitch": -31.48,
   "hfov": 10.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 43.84,
   "distance": 100
  }
 ],
 "id": "overlay_BD43DCBA_937C_7B5B_41D3_1CA018A7E969",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -132.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9CB7A43F_909B_62E3_418E_881953A1B497, this.camera_8CAEEAC0_9A8B_2F4A_41D2_36C619F11240); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C339DCB_9810_4DDB_4195_833DBC7696E3",
   "pitch": -40.14,
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -132.02,
   "distance": 100
  }
 ],
 "id": "overlay_B95FE890_9343_9B26_41E0_995274EC6985",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.25,
   "yaw": -57.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97, this.camera_887DDD0B_9A8B_2ADE_41C1_088B34CD520C); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3E1DC3_9810_4DCB_41D9_DD5FA7FE71C1",
   "pitch": -33.11,
   "hfov": 9.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -57.41,
   "distance": 100
  }
 ],
 "id": "overlay_8E805606_92CC_772B_41CB_491E41E851F2",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 29.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107, this.camera_886F9D19_9A8B_2AFA_41CF_A52EE54C509D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C398DC3_9810_4DCB_41C6_6B70D32C1FF9",
   "pitch": -25.32,
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 29.52,
   "distance": 100
  }
 ],
 "id": "overlay_8E2D97F1_92CF_94E6_41A2_D023AC1252F9",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.32,
   "yaw": 120.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1, this.camera_88184D27_9A8B_2AD6_41DB_624455DE6DDC); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C39CDC4_9810_4DCD_41C2_2B56F102D453",
   "pitch": -17.03,
   "hfov": 10.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.58,
   "distance": 100
  }
 ],
 "id": "overlay_8FE74B61_92CC_9DE9_41C4_7FB216D59ADB",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.13,
   "yaw": -111.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3, this.camera_8B24FC42_9A8B_2B4E_41D7_8B077D71F4F2); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C036DC0_9810_4DC5_41D5_0F6EDB10DB24",
   "pitch": -27.46,
   "hfov": 9.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -111.55,
   "distance": 100
  }
 ],
 "id": "overlay_8B505E60_92C5_97E6_41C5_65450634C991",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": 61.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7, this.camera_88D03C50_9A8B_2B4A_41E1_73B6FBBA0ACA); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C02FDC0_9810_4DC5_41DF_9013BD4623C8",
   "pitch": -19.42,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 61.42,
   "distance": 100
  }
 ],
 "id": "overlay_88787279_92C4_6FD9_41D3_858D9D19FB5A",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.4,
   "yaw": -58.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714, this.camera_8C8CFAA2_9A8B_2FC9_41C9_E93B097468F2); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C397DC4_9810_4DCD_41E2_1DED07D77F40",
   "pitch": -24.07,
   "hfov": 9.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.54,
   "distance": 100
  }
 ],
 "id": "overlay_B2EB2267_9344_AFEA_41C3_0FD8CB89E67B",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.76,
   "yaw": 120.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF22240_90A5_669E_41DC_CC05F5811107, this.camera_8C92FA85_9A8B_2FCA_41A5_79A0F9E1F2A9); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C38FDC4_9810_4DCD_41CA_E6B6EE4C1279",
   "pitch": -17.79,
   "hfov": 10.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.08,
   "distance": 100
  }
 ],
 "id": "overlay_B0222432_9347_AB6B_41DB_0C339B541A06",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.95,
   "yaw": 26.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1, this.camera_8C9CCA94_9A8B_2FCA_41D1_B3FC5C81EFA9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C385DC4_9810_4DCD_41C1_4AA4949775AC",
   "pitch": -26.96,
   "hfov": 8.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.25,
   "distance": 100
  }
 ],
 "id": "overlay_B2C0E1D2_9344_AD2B_41C9_44DD3DA861AC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.06,
   "yaw": 158.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89, this.camera_8CE29A76_9A8B_2F36_41DE_837F01C0B011); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8DDF17AE_9833_DE5C_41DA_5AA9265A02DC",
   "pitch": -14.63,
   "hfov": 11.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.83,
   "distance": 100
  }
 ],
 "id": "overlay_806354D3_90E3_99D2_41C0_E37993550746",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.63,
   "yaw": -20.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C, this.camera_8CF0DA68_9A8B_2F5A_41E1_3B502A316105); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C0E2DB8_9810_5245_41D2_A2E3FE8EE9FF",
   "pitch": -20.03,
   "hfov": 12.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.54,
   "distance": 100
  }
 ],
 "id": "overlay_81BD649B_90E5_9852_41C8_E09C38438DFC",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "inertia": false,
 "id": "panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.14,
   "yaw": -51.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C, this.camera_8B129BFD_9A8B_2D3A_41D1_BDE8CC279E21); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C09ADB8_9810_5245_41DC_7D268DED6947",
   "pitch": -21.05,
   "hfov": 9.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.75,
   "distance": 100
  }
 ],
 "id": "overlay_8302CCAF_90E3_6872_41DD_844B35220DCD",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.87,
   "yaw": 127.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78, this.camera_8B6B5BEF_9A8B_2D56_41D8_F6D4C07B343C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C09EDB8_9810_5245_41C6_7601310BE3B0",
   "pitch": -15.27,
   "hfov": 11.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 127.11,
   "distance": 100
  }
 ],
 "id": "overlay_83FBF43D_90E2_9856_41DD_1A5E39B567F6",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.69,
   "yaw": -110.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714, this.camera_882BDD50_9A8B_254A_41D2_AC9D5FAD3E6A); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3BCDC5_9810_4DCF_41DE_CAE1FC5186E5",
   "pitch": -26.2,
   "hfov": 9.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -110.54,
   "distance": 100
  }
 ],
 "id": "overlay_B1A7A074_9345_EBEF_41D2_B12213319657",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.83,
   "yaw": 84.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509, this.camera_88086D35_9A8B_2ACA_41C5_D5EA91FFD864); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3B5DC5_9810_4DCF_41D3_86E53984F19C",
   "pitch": -16.53,
   "hfov": 10.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.16,
   "distance": 100
  }
 ],
 "id": "overlay_B0359A09_9344_BF39_41A0_26FEF4FA86C5",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.65,
   "yaw": 161.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD, this.camera_8839AD43_9A8B_254E_41DF_BBF432355196); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C381DC6_9810_4DCD_41C6_4E741232E25E",
   "pitch": -33.74,
   "hfov": 10.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 161.53,
   "distance": 100
  }
 ],
 "id": "overlay_B7A02DD0_9343_9527_41A8_667575523689",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.23,
   "yaw": -114.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA, this.camera_89DBED5E_9A8B_2576_41C5_DBCDBC500E4F); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C009DBF_9810_4DBB_41D2_7C7FBDD2C606",
   "pitch": -25.07,
   "hfov": 10.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -114.31,
   "distance": 100
  }
 ],
 "id": "overlay_89EB0EAE_92C4_777A_41C4_90C433BDFA67",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.97,
   "yaw": 148.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97, this.camera_89C5DD6C_9A8B_255A_41C5_D37F827A3CAF); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C00EDBF_9810_4DBB_41C6_44027E23E1A3",
   "pitch": -21.68,
   "hfov": 10.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 148.47,
   "distance": 100
  }
 ],
 "id": "overlay_882362B2_92C4_AF6B_41C9_ECA2ADED216B",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.61,
   "yaw": -135.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1, this.camera_8B1F9C0B_9A8B_2ADF_41DB_71AE95D464F6); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3C7DC2_9810_4DC5_41DE_1C18998465F3",
   "pitch": -21.05,
   "hfov": 9.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -135.41,
   "distance": 100
  }
 ],
 "id": "overlay_8AF43F9E_92DC_755B_41D4_D405FB54F236",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 170.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F, this.camera_89A10DBD_9A8B_253A_41CC_A09BFEB0C058); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C061DBD_9810_4DBF_41E0_222BC81D9463",
   "pitch": -35.02,
   "hfov": 10.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 170.58,
   "distance": 100
  }
 ],
 "id": "overlay_87FA2EBA_92C4_B75B_41DB_1E98B741A630",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.62,
   "yaw": -85.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9, this.camera_8953EDCB_9A8B_255E_41DC_BA2152FB481B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C066DBD_9810_4DBF_41D4_C6D3B6FBC6C9",
   "pitch": -20.8,
   "hfov": 9.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.92,
   "distance": 100
  }
 ],
 "id": "overlay_8787095A_92C5_9DDA_41E1_17C2D04B3A6D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.09,
   "yaw": -38.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F, this.camera_897DDDF5_9A8B_254A_41D9_ECFDE558A2CA); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C024DC1_9810_4DC7_4156_CAE96FD24DFF",
   "pitch": -25.7,
   "hfov": 11.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -38.69,
   "distance": 100
  }
 ],
 "id": "overlay_8A5C4535_92DD_B569_41E1_0A267158FA15",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.01,
   "yaw": 60.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA, this.camera_894D9DE7_9A8B_2556_41D1_13DBD164CE62); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3DBDC1_9810_4DC7_41DF_E4DF1E9F0074",
   "pitch": -12.51,
   "hfov": 12.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 60.29,
   "distance": 100
  }
 ],
 "id": "overlay_8B3CB3DE_92DC_6CDA_41CC_5B4F2910332E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.72,
   "yaw": 148.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5, this.camera_896D2E03_9A8B_26CE_41DF_59360981EBE4); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3D1DC1_9810_4DC7_41C9_ACA182DB702F",
   "pitch": -21.81,
   "hfov": 10.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 148.59,
   "distance": 100
  }
 ],
 "id": "overlay_88CC831C_92C3_AD5E_41C6_BE93F4B72E81",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -92.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546, this.camera_888F5CB3_9A8B_2BCE_41C4_C385132B77B2); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8B5ABE18_9830_CE44_41A7_011524A57F80",
   "pitch": -31.73,
   "hfov": 10.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.7,
   "distance": 100
  }
 ],
 "id": "overlay_BB7EF672_937C_B7EB_41D9_78E92E5997F0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.11,
   "yaw": 163.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC, this.camera_88BBACC2_9A8B_2B4E_41D7_3DC0089C8558); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8B5D0E19_9830_CE44_41D4_79C353B854B8",
   "pitch": -31.73,
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 163.92,
   "distance": 100
  }
 ],
 "id": "overlay_BBC1B471_937C_6BE6_41D9_CE6E956A0340",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.04,
   "yaw": 82.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC, this.camera_88A41CD1_9A8B_2B4A_41D0_BE82EC736407); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8B5DBE19_9830_CE44_419F_C0EA898481E8",
   "pitch": -21.93,
   "hfov": 13.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82.27,
   "distance": 100
  }
 ],
 "id": "overlay_8A640D7B_9830_52BB_41C7_E2ED15CB60C1",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.2,
   "yaw": -169.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F, this.camera_8B32DC27_9A8B_2AD7_41B5_676E1148493A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C011DBE_9810_4DBD_41BC_A920A0491555",
   "pitch": -22.56,
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.7,
   "distance": 100
  }
 ],
 "id": "overlay_84F7C335_92C3_AD69_41CF_B5FA29218288",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 97.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1, this.camera_8B3E4C35_9A8B_2ACB_41C4_4346F353BF10); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C014DBE_9810_4DBD_419A_5250D2078AB9",
   "pitch": -15.27,
   "hfov": 10.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.22,
   "distance": 100
  }
 ],
 "id": "overlay_8460CD9F_92DC_955A_41CE_B74F987CDAB5",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE304E6_90A5_6362_41D5_1864029665F5_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.49,
   "yaw": -24.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3, this.camera_88F4AC7A_9A8B_2B3E_41DE_121C367D3D93); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C038DC0_9810_4DC5_41D7_48C0BFDF8FE3",
   "pitch": -19.17,
   "hfov": 9.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -24.5,
   "distance": 100
  }
 ],
 "id": "overlay_82F68F28_92C4_9566_4182_89B71B87F9CE",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.33,
   "yaw": 135.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714, this.camera_88C97C6C_9A8B_2B5A_41D5_2535D8D3EFA4); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C03CDC0_9810_4DC5_41D4_B408D608C813",
   "pitch": -22.94,
   "hfov": 11.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 135.66,
   "distance": 100
  }
 ],
 "id": "overlay_80EFD21A_92CC_6F5A_41C1_831AB8A10E88",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.7,
   "yaw": 159.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD, this.camera_8B418BB5_9A8B_2DCA_41D6_BDE60703F9A3); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3B9DC6_9810_4DCD_41D9_4E1A3CE36E15",
   "pitch": -30.35,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.15,
   "distance": 100
  }
 ],
 "id": "overlay_8A7EB608_9127_B83E_41D6_ABF06432F7B2",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.9,
   "yaw": -166.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68, this.camera_8B7E5BE1_9A8B_2D4A_41A4_1D02B6850216); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3BEDC6_9810_4DCD_41E2_F17D01AC3CF2",
   "pitch": -32.99,
   "hfov": 9.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -166.06,
   "distance": 100
  }
 ],
 "id": "overlay_8BCA727C_9127_78D6_41CC_80AF6D50B3E8",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": -24.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666, this.camera_8B70EBD3_9A8B_2D4E_41E1_2409813CBBA2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3B5DC6_9810_4DCD_41A4_BD3A73BEF7A0",
   "pitch": -34.12,
   "hfov": 9.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -24.87,
   "distance": 100
  }
 ],
 "id": "overlay_8AD996EB_9125_B9F2_41AC_E20CDDA046BC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.89,
   "yaw": 66.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE304E6_90A5_6362_41D5_1864029665F5, this.camera_8B5EDBA6_9A8B_2DD6_41CD_D0CD9926ED01); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3ABDC6_9810_4DCD_41DB_69A591C7AA24",
   "pitch": -25.32,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.7,
   "distance": 100
  }
 ],
 "id": "overlay_8CFA1091_9123_982E_41D0_B2C661B224CA",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.74,
   "yaw": 112.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1, this.camera_8B493BC5_9A8B_2D4A_41D2_070D77DC0D1E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C3A1DC7_9810_4DCB_41C1_510FD7AE74DF",
   "pitch": -26.96,
   "hfov": 10.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 112.67,
   "distance": 100
  }
 ],
 "id": "overlay_B7CB24F6_9345_94EB_41BD_E790E2AA5025",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.63,
   "yaw": -23.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68, this.camera_891FFE11_9A8B_26CA_41DE_639EB86EF0DF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C35BDC7_9810_4DCB_41E1_99049C29A480",
   "pitch": -33.86,
   "hfov": 10.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.62,
   "distance": 100
  }
 ],
 "id": "overlay_84D4645C_92C4_ABDE_41E1_BDE7FF52B970",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.8,
   "yaw": 73.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912, this.camera_8F6219F2_9A8B_2D4E_41D2_0C7CFBDA5F7A); this.mainPlayList.set('selectedIndex', 13); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C065DBE_9810_4DBD_41C6_C651C3316B22",
   "pitch": -26.33,
   "hfov": 10.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 73.98,
   "distance": 100
  }
 ],
 "id": "overlay_817553AC_92C3_AD7E_41CA_9D75D2A01917",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.14,
   "yaw": -108.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3, this.camera_8F6EFA00_9A8B_2ECA_41CB_E1C93A15CBF6); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C01DDBF_9810_4DBB_41B8_142CEF9C4F22",
   "pitch": -24.44,
   "hfov": 9.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -108.4,
   "distance": 100
  }
 ],
 "id": "overlay_8692D796_92C5_952A_41BE_3A9E49129629",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.27,
   "yaw": -37.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A, this.camera_8F4FD9D5_9A8B_2D4A_41D6_5475FA9F246F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C013DBF_9810_4DBB_41DD_1D9FBD7822E2",
   "pitch": -29.47,
   "hfov": 10.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -37.94,
   "distance": 100
  }
 ],
 "id": "overlay_863A2681_92C7_B726_41CB_D7DE252ACFDF",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.81,
   "yaw": 121.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78, this.camera_8BAF6B7C_9A8B_2D3A_41E1_D5CD1CEE49B7); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C379DC8_9810_4DC5_41B0_8FB3CCAC5132",
   "pitch": -20.68,
   "hfov": 10.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 121.71,
   "distance": 100
  }
 ],
 "id": "overlay_B5E355C0_9343_9527_41E1_373952AB1AE3",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -54.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC, this.camera_8B512B8A_9A8B_2DDE_41D4_DE6A4BC4333D); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D9854E5_9830_53CF_4191_C38A46163ADB",
   "pitch": -24.69,
   "hfov": 10.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -54.89,
   "distance": 100
  }
 ],
 "id": "overlay_B4F3E794_937C_752F_41D8_A6D3392586EC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.46,
   "yaw": -138.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546, this.camera_8B544B98_9A8B_2DFA_41E2_EEFB1E8DB2BE); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8DE4E4ED_9830_53DF_41D9_F4EAAA492530",
   "pitch": -34.74,
   "hfov": 8.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -138.93,
   "distance": 100
  }
 ],
 "id": "overlay_8A84B8C2_9810_F3C4_41B7_BD4126FF101B",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "items": [
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_16",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.32",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_15",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_18",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_13",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.37",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "y": "0.36",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_20",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.44",
     "class": "PhotoCameraPosition",
     "y": "0.29",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.37",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_19",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.27",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.32",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.75",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.71",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "y": "0.47",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.46",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_10",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.31",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_11",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.51",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_12",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "y": "0.49",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_14",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_17",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.26",
     "class": "PhotoCameraPosition",
     "y": "0.32",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_21",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "y": "0.74",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_22",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.41",
     "class": "PhotoCameraPosition",
     "y": "0.70",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_24",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "y": "0.54",
     "zoomFactor": 1.1
    }
   }
  },
  {
   "media": "this.album_8E10D57B_9810_32BB_41D8_C444FB9DE425_25",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.39",
     "zoomFactor": 1.1
    }
   }
  }
 ],
 "id": "album_8E10D57B_9810_32BB_41D8_C444FB9DE425_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "backgroundOpacity": 0.7,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 40,
 "verticalAlign": "top",
 "paddingLeft": 40,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right",
 "layout": "vertical"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C05CDBB_9810_4DBB_41D8_35EC391891D4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE5B102_90A4_A2A2_419A_D5595CFE6B68_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C053DBB_9810_4DBB_41E1_CF51CD2FEA30",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C369DC9_9810_4DC7_41D7_83ED7F535721",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BEF23F0_90A4_A57D_41C0_D0538D7533BC_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C36CDC9_9810_4DC7_41C1_257163CFCC30",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C089DB8_9810_5245_41D2_AD83154B2D8A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C08ADB9_9810_5247_41C8_E93EFE641E86",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE55650_90A4_EEBE_41DA_43FAE921EA78_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C080DB9_9810_5247_41B4_E4E2569E0F22",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF4830A_90A5_E6A2_41D5_3546CD844ECC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8DE464E7_9830_53CB_41A5_ECC7593C1ADB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9CB7A43F_909B_62E3_418E_881953A1B497_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8D99B4E4_9830_53CD_41E2_65FAAC2BA8DB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C350DC7_9810_4DCB_41E1_60F2CE96D3BF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE58667_90A7_6F63_41CD_F71BD1E36FD9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C356DC8_9810_4DC5_41E1_8CC85651DA81",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0A9DBA_9810_5245_41CB_7FEEF36536C6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0AADBA_9810_5245_41D9_785EEBFBA202",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF3D66D_90A4_AF66_41BF_CD8D69743666_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0A2DBA_9810_5245_41B8_B2AE3D01778F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0F5DB7_9810_524B_41D5_9109D2E08B0E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE324E2_90A4_E362_41C9_84A51A15F70C_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0E9DB7_9810_524B_41C0_8D0D04CB3A0A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3C9DC1_9810_4DC7_41E1_E5C5F6E1B0B8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE3040C_90A5_A2A5_41B1_39F46576A2A1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3CEDC2_9810_4DC5_41D4_7237B252C0A7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C04FDBC_9810_4DBD_41D6_DFDCF3726047",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C042DBC_9810_4DBD_41D8_C52F02B63F69",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF22240_90A5_669E_41DC_CC05F5811107_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C078DBC_9810_4DBD_41E2_FD0249495F96",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C073DBC_9810_4DBD_41E0_5FB8447994DC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4C29A_90A5_A7A2_41DF_81EAFEF004C1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C06BDBD_9810_4DBF_41AD_BFE28AF7FB62",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0BADB9_9810_5247_41D4_D3CEE689A516",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF30123_90A4_E2E2_41D6_F00FE8FB5DF3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0B1DB9_9810_5247_41C8_CBA6C557633A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8A36B459_90E4_A2AF_41D6_C5000D807445_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8D485648_9830_DEC5_41D2_616FEFBD4646",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0F8DB6_9810_524D_41D4_09A39214BEE3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BC398F3_90A4_E363_41E0_66D9277BABBC_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C0FDDB7_9810_524B_41D2_8F056B8FB8D6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3FCDC2_9810_4DC5_41A1_3B1068FAB6F9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3F2DC3_9810_4DCB_41DC_E239C5D300FE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF27CDE_90A5_A3A2_4157_27095F340E97_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3E8DC3_9810_4DCB_41A7_11EB43438BFD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C316DCA_9810_4DC5_41D3_487CC08DB3D8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C300DCA_9810_4DC5_41AB_320C468C9615",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE368FD_90A5_E366_41DA_CA53EC7A1546_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C339DCB_9810_4DDB_4195_833DBC7696E3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3E1DC3_9810_4DCB_41D9_DD5FA7FE71C1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C398DC3_9810_4DCB_41C6_6B70D32C1FF9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4F77A_90A5_6D6D_41C3_CE24EB3DB509_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C39CDC4_9810_4DCD_41C2_2B56F102D453",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C036DC0_9810_4DC5_41D5_0F6EDB10DB24",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE30EF5_90A5_5F66_41DA_9BD434316AFA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C02FDC0_9810_4DC5_41DF_9013BD4623C8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C397DC4_9810_4DCD_41E2_1DED07D77F40",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C38FDC4_9810_4DCD_41CA_E6B6EE4C1279",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE4BD2F_90A5_62E3_41DD_BF39E9188EDD_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C385DC4_9810_4DCD_41C1_4AA4949775AC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_8DDF17AE_9833_DE5C_41DA_5AA9265A02DC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BFEFF6B_90A4_DD63_41D1_B506553FB16C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_8C0E2DB8_9810_5245_41D2_A2E3FE8EE9FF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C09ADB8_9810_5245_41DC_7D268DED6947",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE3FABF_90A4_A7E2_41C5_CD3A33161C89_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C09EDB8_9810_5245_41C6_7601310BE3B0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3BCDC5_9810_4DCF_41DE_CAE1FC5186E5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3B5DC5_9810_4DCF_41D3_86E53984F19C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF3D72A_90A4_AEE2_41E1_F06C93E74DF1_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C381DC6_9810_4DCD_41C6_4E741232E25E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C009DBF_9810_4DBB_41D2_7C7FBDD2C606",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF19AA4_90A5_67E6_41C8_BBA88E25E1D7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C00EDBF_9810_4DBB_41C6_44027E23E1A3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF48E31_90A5_DEFE_41B9_F1A315C72E82_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3C7DC2_9810_4DC5_41DE_1C18998465F3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C061DBD_9810_4DBF_41E0_222BC81D9463",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BD9DF4A_909B_5EAD_41A8_EE419F97E55A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C066DBD_9810_4DBF_41D4_C6D3B6FBC6C9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C024DC1_9810_4DC7_4156_CAE96FD24DFF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3DBDC1_9810_4DC7_41DF_E4DF1E9F0074",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF5E964_90A5_A565_41CA_09ACEA79E6A3_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3D1DC1_9810_4DC7_41C9_ACA182DB702F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8B5ABE18_9830_CE44_41A7_011524A57F80",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8B5D0E19_9830_CE44_41D4_79C353B854B8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE37E2B_90A5_DEE3_41E0_EBB1AD3E3A92_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8B5DBE19_9830_CE44_419F_C0EA898481E8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C011DBE_9810_4DBD_41BC_A920A0491555",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF285AA_90A4_ADED_41B7_D9CB18576912_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C014DBE_9810_4DBD_419A_5250D2078AB9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C038DC0_9810_4DC5_41D7_48C0BFDF8FE3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE304E6_90A5_6362_41D5_1864029665F5_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C03CDC0_9810_4DC5_41D4_B408D608C813",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3B9DC6_9810_4DCD_41D9_4E1A3CE36E15",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3BEDC6_9810_4DCD_41E2_F17D01AC3CF2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3B5DC6_9810_4DCD_41A4_BD3A73BEF7A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3ABDC6_9810_4DCD_41DB_69A591C7AA24",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF39C21_90A4_A29F_41D5_FD06DAD76714_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C3A1DC7_9810_4DCB_41C1_510FD7AE74DF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BF0EB99_90A4_A5AE_41D0_6232DD4AA3E6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C35BDC7_9810_4DCB_41E1_99049C29A480",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C065DBE_9810_4DBD_41C6_C651C3316B22",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C01DDBF_9810_4DBB_41B8_142CEF9C4F22",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE2806D_90A5_6366_41E1_D0A1A6349D3F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C013DBF_9810_4DBB_41DD_1D9FBD7822E2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8C379DC8_9810_4DC5_41B0_8FB3CCAC5132",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BE2E9EC_90A4_A565_41E0_146F151F0E4A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8D9854E5_9830_53CF_4191_C38A46163ADB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9BEFA897_90A5_A3A2_41CC_9BAD5473A8F2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_8DE4E4ED_9830_53DF_41D9_F4EAAA492530",
 "rowCount": 6,
 "colCount": 4
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "top",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "height": "25%",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
  "this.Button_895E8AC5_90EC_E7A6_41E1_7A5BE3512671",
  "this.Container_8AF1B2CC_90EC_A7A5_41CC_C6B28534E8B6",
  "this.Button_89A4B2C1_90ED_A79F_41A0_5EB6D6A9DB5D",
  "this.Container_8AA37BD5_90EC_A5AD_41DD_A65C2832657E",
  "this.Button_8936F06C_90EC_A366_41D6_0207B6F9AC0D",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_8A9ACE3C_90EB_5EE6_41D8_9513B6DB1D00"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "26.316%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemLabelGap": 7,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "class": "WebFrame",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_895E8AC5_90EC_E7A6_41E1_7A5BE3512671",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://wa.me/5521997531979', '_blank')",
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "WhatsApp",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_8AF1B2CC_90EC_A7A5_41CC_C6B28534E8B6",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_89A4B2C1_90ED_A79F_41A0_5EB6D6A9DB5D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.instagram.com/ref.house', '_blank')",
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Instagram",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_8AA37BD5_90EC_A5AD_41DD_A65C2832657E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_8936F06C_90EC_A366_41D6_0207B6F9AC0D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.refhouse.com.br/', '_blank')",
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Site",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://goo.gl/maps/2PvzxzGBXvK2HKEi6', '_blank')",
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Localiza\u00e7\u00e3o",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_8E2BB930_9A8B_2AC9_41D8_C71A1E37B7BB.set('selectedIndex', -1); }, this); this.playList_8E2BB930_9A8B_2AC9_41D8_C71A1E37B7BB.set('selectedIndex', 0)",
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Fotos",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Photoalbum"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_8A9ACE3C_90EB_5EE6_41D8_9513B6DB1D00",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 2,
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 128,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Ref House</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.refhouse.com.br</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tel: (21) 9 9753-1979</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>R. Manuel Brasiliense, 121</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Barra da Tijuca - RJ</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 42,
 "verticalAlign": "middle",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "verticalAlign": "top",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "bottom",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "5%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "right",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "46%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "75%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "top",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
