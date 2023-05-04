
        function displayAll(e) {
            var x = e.parentElement.getElementsByClassName("test");

            if (e.innerText === "READ MORE") {
                e.innerText = "READ LESS";
                x[0].style =
                "display: block;overflow: visible;textOverflow: visible;white-space: normal;width : 100%;maxwidth: 120px;";
            } else {
                e.innerText = "READ MORE";
                x[0].style =
                "white-space: nowrap;overflow: hidden;text-overflow: ellipsis;display: block;width : 300px;";
            }
        }

        
        

        