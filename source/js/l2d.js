addEventListener("DOMContentLoaded", function () {

    let models = [

      {

        width: 230,

        height: 350,

        bottom: "0px",

        right: "0px",

        role: "https://cdn.jsdelivr.net/gh/imuncle/live2d@master/model/snow_miku/model.json",

        background: "",

        opacity: 1,

        mobile: false,

        draggable: false,

        scale: 0.07,

      },

    ];

    new Live2dLoader(models);

  });