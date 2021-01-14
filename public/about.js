window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });
  var e = window.matchMedia("(max-width: 700px)");
  displaymobile(e);
  e.addListener(displaymobile);
  function displaymobile(event) {
    if(event.matches) {
      document.body.innerHTML = "";

      var title = document.createTextNode("Computer Science for Kansas Organization");
      var h1 = document.createElement("h1");
      h1.appendChild(title);
      h1.className = "pagetitle";
      document.body.appendChild(h1);
      
      var table = document.createElement("div");
      table.className = "table";

      var ul = document.createElement("ul");
      var standardsli = document.createElement("li");
      let standards = document.createElement("a");
      standards.href = "/standards";
      standards.innerHTML = "Standards";
      standardsli.appendChild(standards);
      var forumsli = document.createElement("li");
      let forums = document.createElement("a");
      forums.href = "/forums";
      forums.innerHTML = "Forums";
      forumsli.appendChild(forums);
      var cstali = document.createElement("li");
      let csta = document.createElement("a");
      csta.href = "https://www.csteachers.org/";
      csta.innerHTML = "CSTA";
      cstali.appendChild(csta);
      
      ul.appendChild(standardsli);
      ul.appendChild(forumsli);
      ul.appendChild(cstali);

      table.appendChild(ul);

      document.body.appendChild(table);

      var introduction = document.createElement("div");
      introduction.className = "introduction";
      introduction.innerHTML = "This is the website of the Kansas Computer Science Teacher's Association (CSTA) chapter. If you are interested in becoming a member of the Kansas CSTA or part of its leadership, please let us know! In addition to organization, we we are working on an implementation guide for the new state model standards for computer science. We are also working on the first Computer Science for Kansas conference that will be the flagship for supporting CS in Kansas.";
      document.body.appendChild(introduction);
    }
    else {
      document.body.innerHTML = "";

      var pagetop = document.createElement("div");
      pagetop.className = "pagetop";

      var title = document.createTextNode("Computer Science for Kansas Organization");
      var h1 = document.createElement("h1");
      h1.className = "pagetitle";
      h1.appendChild(title);
      pagetop.appendChild(h1);
      document.body.appendChild(pagetop);

      var table = document.createElement("div");
      table.className = "table";

      var ul = document.createElement("ul");
      var standardsli = document.createElement("li");
      let standards = document.createElement("a");
      standards.href = "/standards";
      standards.id = "standards";
      standards.innerHTML = "Standards";
      standardsli.appendChild(standards);
      var forumsli = document.createElement("li");
      let forums = document.createElement("a");
      forums.href = "/forums";
      forums.id = "forums";
      forums.innerHTML = "Forums";
      forumsli.appendChild(forums);
      var cstali = document.createElement("li");
      let csta = document.createElement("a");
      csta.href = "https://www.csteachers.org/";
      csta.id = "csta";
      csta.innerHTML = "CSTA";
      cstali.appendChild(csta);
      
      ul.appendChild(standardsli);
      ul.appendChild(forumsli);
      ul.appendChild(cstali);

      table.appendChild(ul);

      document.body.appendChild(table);

      var introduction = document.createElement("div");
      introduction.className = "introduction";
      introduction.innerHTML = "This is the website of the Kansas Computer Science Teacher's Association (CSTA) chapter. If you are interested in becoming a member of the Kansas CSTA or part of its leadership, please let us know! In addition to organization, we we are working on an implementation guide for the new state model standards for computer science. We are also working on the first Computer Science for Kansas conference that will be the flagship for supporting CS in Kansas.";
      document.body.appendChild(introduction);
    }
  }