
  var selDiv = "";
  var storedFiles = [];

  $(document).ready(function() {
    selDiv = $("#selectedFiles");
    $("body").on("click", ".selFile", editFiles);
  });
  var start = function() {
    var i = 0;
    var wsImpl = window.WebSocket || window.MozWebSocket;
    window.ws = new wsImpl("ws://localhost:8181/");
    ws.onmessage = function(e) {
      if (typeof e.data === "string") {
      } else if (e.data instanceof ArrayBuffer) {
      } else if (e.data instanceof Blob) {
        i++;
        var f = e.data;
        f.name = "File" + i;
        storedFiles.push(f);
        console.log("---------------------0");

        var reader = new FileReader();

        reader.onload = function(e) {
          var html =
            '<div class="col-sm-2 text-center" style="border: 1px solid black; margin-left: 2px;"><img height="200px" width="150px" src="' +
            e.target.result +
            "\" data-file='" +
            f.name +
            "' class='selFile' title='Click to remove'><br/>" +
            "Page " +
            i +
            "</div>";
          selDiv.append(html);
        };
        reader.readAsDataURL(f);

        download.addEventListener(
          "click",
          function() {
            for (var i = 0; i < storedFiles.length; i++) {
              var img = new Image();
              img.src = window.URL.createObjectURL(storedFiles[i]);
              var done = img.src;
            }

            var reader = new FileReader();

            reader.readAsDataURL(f);
            reader.onloadend = function() {
              var base64data = reader.result;

              //                         		    console.log("---------------------1");
              $("#download").unbind("click");
              //                         			console.log("---------------------2");
              var form = $("#upload-file-form")[0];
              //                         			console.log("---------------------3");
              var fd = new FormData(form);
              //                         			console.log("---------------------4: " + $(".selFile").attr("src"));
              //                         			var hello = 'file' + i + '¤' + $(".selFile").attr("src");
              //                         			console.log("---------------------1" + done);

              var hello = "file" + i + "¤" + base64data;

              var kok = hello.substring(100, Math.min(hello.length, 200));
              console.log("---------------------se: " + kok);

              document.getElementById("add").value = hello;
              fd.append("data-file", hello);

              //                         			fd.append("data_file",$(".show_file_"+code_file).attr("src"));

              $.ajax({
                url: "/gestion-courriers/uploadFile",
                type: "post",
                data: fd,
                contentType: false,
                processData: false,
                cache: false,
                success: function() {
                  $("#upload-file-message").text("Fichier enregistré !.");
                },
                error: function() {
                  $("#upload-file-message").text(
                    "Fichier non enregistré, veuillez réessayer de nouveau !."
                  );
                }
              });
            };
          },
          false
        );
      }
    };
    ws.onopen = function() {};
    ws.onclose = function() {
      $(".dalert").modal("show");
    };
  };
  window.onload = start;

  function MyFile() {
    console.log("Put a message here.");
    ws.send("1100");
    console.log("Put a message here.");
  }

  function editFiles(e) {
    var file = $(this).data("file");
    for (var i = 0; i < storedFiles.length; i++) {
      console.log("---------------------hh: " + $(".selFile").attr("src"));
      if (storedFiles[i].name === file) {
        $(".scandetail").modal("show");
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = new Image();
        img.src = window.URL.createObjectURL(storedFiles[i]);
        console.log("---------------------lol: " + img.src);
        img.onload = function() {
          c.width = img.width;
          c.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
        };
        break;
      }
    }
  }

