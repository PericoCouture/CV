StartApp(); // Load App
LoadListeners(); // Register all Listeners
LaunchFinderApp();
WindowResized();

function LaunchApplication(top, left, height, width, title) {
  Application.style.top = top;
  Application.style.left = left;
  Application.style.height = height;
  Application.style.width = width;
  ResponsiveDefaultTop = top;
  ResponsiveDefaultLeft = left;
  ResponsiveDefaultHeight = height;
  ResponsiveDefaultWidth = width;
  Application.style.opacity = "1";
  StatusBarApplicationName.innerHTML = title;
  StatusBar.style.opacity = "1";
  WindowResized();
}
function LaunchFinderApp() {
  LaunchApplication("50%", "50%", "50%", "50%", "Finder");

  Application.innerHTML = `
  <div id="ApplicationFinderParts">
    <div id="ApplicationFinderPart1"></div>
    <div id="ApplicationFinderPart2"></div>
  </div>
  `;
  // ApplicationFinderParts
  ApplicationFinderParts = document.getElementById("ApplicationFinderParts");
  ApplicationFinderParts.style.height = "100%";
  ApplicationFinderParts.style.display = "grid";
  ApplicationFinderParts.style.gridTemplateColumns = "1fr 2.5fr";
  // ApplicationFinderPart1
  ApplicationFinderPart1 = document.getElementById("ApplicationFinderPart1");
  ApplicationFinderPart1.style.backdropFilter = "blur(10px)";
  ApplicationFinderPart1.style.borderRadius = "10px 0 0 10px";
  ApplicationFinderPart1.style.overflowY = "auto";
  ApplicationFinderPart1.style.backgroundColor =
    "var(--windowBackgroundColor02)";
  ApplicationFinderPart1.innerHTML = `
    <h1>Finder</h1>
      <div id="ApplicationFinderPart1List">
        <div id="FinderAirdrop">
          <svg id='FinderAirdropLogo' viewBox='0 0 50 50'><path d='M 25 5 C 13.414063 5 4 14.414063 4 26 C 4 33.917969 8.394531 40.824219 14.878906 44.398438 C 15.363281 44.664063 15.972656 44.488281 16.238281 44.007813 C 16.503906 43.523438 16.328125 42.914063 15.84375 42.644531 C 9.980469 39.414063 6 33.179688 6 26 C 6 15.496094 14.496094 7 25 7 C 35.503906 7 44 15.496094 44 26 C 44 33.179688 40.019531 39.414063 34.15625 42.644531 C 33.671875 42.914063 33.496094 43.523438 33.761719 44.007813 C 34.027344 44.488281 34.636719 44.664063 35.121094 44.398438 C 41.605469 40.824219 46 33.917969 46 26 C 46 14.414063 36.585938 5 25 5 Z M 25 9 C 15.621094 9 8 16.621094 8 26 C 8 32.410156 11.554688 38 16.808594 40.894531 C 17.289063 41.160156 17.898438 40.984375 18.167969 40.5 C 18.433594 40.019531 18.257813 39.410156 17.773438 39.140625 C 13.140625 36.589844 10 31.671875 10 26 C 10 17.703125 16.703125 11 25 11 C 33.296875 11 40 17.703125 40 26 C 40 31.671875 36.859375 36.589844 32.226563 39.140625 C 31.742188 39.410156 31.566406 40.019531 31.832031 40.5 C 32.101563 40.984375 32.710938 41.160156 33.191406 40.894531 C 38.445313 38 42 32.410156 42 26 C 42 16.621094 34.378906 9 25 9 Z M 25 13 C 17.832031 13 12 18.832031 12 26 C 12 30.898438 14.71875 35.175781 18.734375 37.390625 C 19.21875 37.65625 19.828125 37.480469 20.09375 37 C 20.359375 36.515625 20.183594 35.90625 19.703125 35.640625 C 16.304688 33.765625 14 30.160156 14 26 C 14 19.914063 18.914063 15 25 15 C 31.085938 15 36 19.914063 36 26 C 36 30.160156 33.695313 33.765625 30.296875 35.640625 C 29.816406 35.90625 29.640625 36.515625 29.90625 37 C 30.171875 37.480469 30.78125 37.65625 31.265625 37.390625 C 35.28125 35.175781 38 30.898438 38 26 C 38 18.832031 32.167969 13 25 13 Z M 25 17 C 20.042969 17 16 21.042969 16 26 C 16 29.390625 17.882813 32.351563 20.660156 33.886719 C 20.976563 34.0625 21.359375 34.058594 21.667969 33.871094 C 21.976563 33.6875 22.164063 33.351563 22.15625 32.992188 C 22.144531 32.628906 21.945313 32.304688 21.625 32.132813 C 19.464844 30.941406 18 28.648438 18 26 C 18 22.121094 21.121094 19 25 19 C 28.878906 19 32 22.121094 32 26 C 32 28.648438 30.535156 30.941406 28.375 32.132813 C 28.054688 32.304688 27.855469 32.628906 27.84375 32.992188 C 27.835938 33.351563 28.023438 33.6875 28.332031 33.871094 C 28.640625 34.058594 29.023438 34.0625 29.339844 33.886719 C 32.117188 32.351563 34 29.390625 34 26 C 34 21.042969 29.957031 17 25 17 Z M 25 21 C 22.25 21 20 23.25 20 26 C 20 27.882813 21.0625 29.519531 22.597656 30.363281 C 23.082031 30.632813 23.691406 30.457031 23.957031 29.972656 C 24.222656 29.488281 24.046875 28.878906 23.5625 28.613281 C 22.632813 28.097656 22 27.136719 22 26 C 22 24.332031 23.332031 23 25 23 C 26.667969 23 28 24.332031 28 26 C 28 27.136719 27.367188 28.097656 26.4375 28.613281 C 25.953125 28.878906 25.777344 29.488281 26.042969 29.972656 C 26.308594 30.457031 26.917969 30.632813 27.402344 30.363281 C 28.9375 29.519531 30 27.882813 30 26 C 30 23.25 27.75 21 25 21 Z M 25 25 C 24.449219 25 24 25.449219 24 26 C 24 26.550781 24.449219 27 25 27 C 25.550781 27 26 26.550781 26 26 C 26 25.449219 25.550781 25 25 25 Z'/></svg>
          <span id='FinderAirdropTitle'>A propos</span>
        </div>
          <div id="FinderRecent">
          <svg id='FinderRecentLogo' viewBox='0 0 32 32'><path d='M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z'/></svg>
            <span id='FinderRecentTitle'>Récents</span>
          </div>
        <div id="FinderApplications">
        <svg id="FinderApplicationsLogo" viewBox="0 0 50 50"><path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 22.572266 11.892578 C 22.187855 11.867986 21.790969 11.952859 21.433594 12.162109 C 20.480594 12.721109 20.161703 13.947391 20.720703 14.900391 L 22.53125 17.990234 L 16.666016 28 L 12 28 C 10.896 28 10 28.896 10 30 C 10 31.104 10.896 32 12 32 L 27.412109 32 C 27.569109 31.237 27.473203 30.409531 27.033203 29.644531 L 27.029297 29.640625 C 26.642297 28.966625 26.105469 28.416 25.480469 28 L 21.302734 28 L 28.978516 14.898438 C 29.536516 13.945438 29.216672 12.720109 28.263672 12.162109 C 27.309672 11.604109 26.085344 11.923953 25.527344 12.876953 L 24.849609 14.033203 L 24.171875 12.876953 C 23.8225 12.281328 23.212949 11.933564 22.572266 11.892578 z M 28.310547 19.941406 L 27.484375 21.314453 C 26.572375 22.830453 26.542953 24.706859 27.376953 26.255859 L 33.673828 37.001953 C 34.045828 37.637953 34.713391 37.990234 35.400391 37.990234 C 35.743391 37.990234 36.092156 37.902797 36.410156 37.716797 C 37.363156 37.158797 37.682047 35.933469 37.123047 34.980469 L 35.376953 32 L 38 32 C 39.104 32 40 31.104 40 30 C 40 28.896 39.104 28 38 28 L 33.033203 28 L 28.310547 19.941406 z M 14.625 34.003906 C 14.068 33.987906 13.526719 34.074328 13.011719 34.236328 L 12.566406 34.994141 C 12.007406 35.946141 12.32825 37.172469 13.28125 37.730469 C 13.59925 37.917469 13.946063 38.005859 14.289062 38.005859 C 14.976062 38.005859 15.644578 37.650625 16.017578 37.015625 L 17.09375 35.179688 C 16.50875 34.496688 15.653859 34.033906 14.630859 34.003906 L 14.625 34.003906 z"/></svg>
          <span id='FinderApplicationsTitle'>Applications</span>
        </div>
        <div id="FinderDownloads">
        <svg id="FinderDownloadsLogo" viewBox="0 0 24 24" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Download-3"><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect><line x1="12" y1="5" x2="12" y2="15" id="Path" stroke="var(--buttonColor02)" stroke-width="2" stroke-linecap="round"></line><path d="M17,11 L12.7071,15.2929 C12.3166,15.6834 11.6834,15.6834 11.2929,15.2929 L7,11" id="Path" stroke="var(--buttonColor02)" stroke-width="2" stroke-linecap="round"></path><line x1="19" y1="20" x2="5" y2="20" id="Path" stroke="var(--buttonColor02)" stroke-width="2" stroke-linecap="round"></line></g></g></svg>
          <span id='FinderDownloadsTitle'>Téléchargements</span>
        </div>
      <div>
    `;
  // ApplicationFinderPart1List
  ApplicationFinderPart1List = document.getElementById(
    "ApplicationFinderPart1List"
  );
  ApplicationFinderPart1List.style.marginLeft = "0";
  ApplicationFinderPart1List.style.paddingLeft = "0";
  // FinderAirdrop
  FinderAirdrop = document.getElementById("FinderAirdrop");
  FinderAirdrop.classList.add("FinderMenus");
  FinderAirdrop.addEventListener("click", DisplayFinderAirdrop);
  // FinderAirdropLogo
  FinderAirdropLogo = document.getElementById("FinderAirdropLogo");
  FinderAirdropLogo.classList.add("FinderMenusLogo");
  // FinderAirdropTitle
  FinderAirdropTitle = document.getElementById("FinderAirdropTitle");
  FinderAirdropTitle.classList.add("FinderMenusTitle");

  // FinderRecent
  FinderRecent = document.getElementById("FinderRecent");
  FinderRecent.classList.add("FinderMenus");
  FinderRecent.addEventListener("click", DisplayFinderRecent);
  // FinderRecentLogo
  FinderRecentLogo = document.getElementById("FinderRecentLogo");
  FinderRecentLogo.style.transform = "rotateY(180deg)";
  FinderRecentLogo.classList.add("FinderMenusLogo");
  // FinderRecentTitle
  FinderRecentTitle = document.getElementById("FinderRecentTitle");
  FinderRecentTitle.classList.add("FinderMenusTitle");

  // FinderApplications
  FinderApplications = document.getElementById("FinderApplications");
  FinderApplications.classList.add("FinderMenus");
  FinderApplications.addEventListener("click", DisplayFinderApplications);
  // FinderApplicationsLogo
  FinderApplicationsLogo = document.getElementById("FinderApplicationsLogo");
  FinderApplicationsLogo.classList.add("FinderMenusLogo");
  // FinderApplicationsTitle
  FinderApplicationsTitle = document.getElementById("FinderApplicationsTitle");
  FinderApplicationsTitle.classList.add("FinderMenusTitle");

  // FinderDownloads
  FinderDownloads = document.getElementById("FinderDownloads");
  FinderDownloads.classList.add("FinderMenus");
  FinderDownloads.addEventListener("click", DisplayFinderDownloads);
  // FinderDownloadsLogo
  FinderDownloadsLogo = document.getElementById("FinderDownloadsLogo");
  FinderDownloadsLogo.classList.add("FinderMenusLogo");
  // FinderDownloadsTitle
  FinderDownloadsTitle = document.getElementById("FinderDownloadsTitle");
  FinderDownloadsTitle.classList.add("FinderMenusTitle");

  // FinderMenus
  FinderMenus = document.getElementsByClassName("FinderMenus");
  for (let i = 0; i < FinderMenus.length; i++) {
    FinderMenus[i].style.display = "flex";
    FinderMenus[i].style.userSelect = "none";
    FinderMenus[i].style.cursor = "pointer";
    FinderMenus[i].style.margin = "5px 10px 5px 10px";
    FinderMenus[i].style.padding = "5px 10px 5px 10px";
    FinderMenus[i].style.borderRadius = "5px";
    FinderMenus[i].style.transition = "50ms";
  }
  // FinderMenusLogo
  FinderMenusLogo = document.getElementsByClassName("FinderMenusLogo");
  for (let i = 0; i < FinderMenusLogo.length; i++) {
    FinderMenusLogo[i].style.height = "30px";
    FinderMenusLogo[i].style.width = "30px";
    FinderMenusLogo[i].style.marginLeft = "10px";
    FinderMenusLogo[i].style.fill = "var(--buttonColor02)";
  }
  // FinderMenusTitle
  FinderMenusTitle = document.getElementsByClassName("FinderMenusTitle");
  for (let i = 0; i < FinderMenusTitle.length; i++) {
    FinderMenusTitle[i].style.color = "var(--textColor)";
    FinderMenusTitle[i].style.marginTop = "auto";
    FinderMenusTitle[i].style.marginLeft = "10px";
    FinderMenusTitle[i].style.marginBottom = "auto";
  }

  //ApplicationFinderPart2
  ApplicationFinderPart2 = document.getElementById("ApplicationFinderPart2");
  ApplicationFinderPart2.style.backgroundColor =
    "var(--windowBackgroundColor01)";
  H1 = document.getElementsByTagName("H1")[0];
  H1.style.color = "var(--textColor)";
  H1.style.margin = "30px";
  H1.style.userSelect = "none";

  DisplayFinderAirdrop(); // Open Airdrop by default

  function DisplayFinderAirdrop() {
    HideFinderMenusBackgrounds();
    FinderAirdrop.style.backgroundColor = "var(--buttonColor01)";
    ApplicationFinderPart2.style.color = "var(--textColor)";
    ApplicationFinderPart2.innerHTML = `
    <div id="ApplicationFinderPart2Container">
      <div id="ApplicationFinderPart2Text1">
        <h2>A Propos de Moi</h2>
        <p>Salut, je suis Périco Couture, étudiant en BTS SIO (Informatique Réseau / Serveurs) à Saint Etienne.</p>
        <p>Depuis le collège, je suis passionné par l'univers magique de l'informatique, que ça soit le réseau avec les switchs ou routeurs mais aussi les serveurs, en commençant par des serveurs de jeux puis de fichiers, etc.</p>
      </div>
      <div id="ApplicationFinderPart2Text2">
        <h2>Navigation</h2>
        <p>Pour en savoir plus sur moi, ma scolarité, mes passions, vous pouvez naviguer à travers les différentes applications via le Dock ou le Launchpad</p>
      </div>
    </div>
    `;
    // ApplicationFinderPart2Container
    ApplicationFinderPart2Container = document.getElementById(
      "ApplicationFinderPart2Container"
    );
    ApplicationFinderPart2.style.overflow = "auto";
    ApplicationFinderPart2Container.style.margin = "20px";
    // ApplicationFinderPart2Text1
    ApplicationFinderPart2Text1 = document.getElementById(
      "ApplicationFinderPart2Text1"
    );
    ApplicationFinderPart2Text1.classList.add("ApplicationFinderPart2Texts");
    // ApplicationFinderPart2Text2
    ApplicationFinderPart2Text2 = document.getElementById(
      "ApplicationFinderPart2Text2"
    );
    ApplicationFinderPart2Text2.classList.add("ApplicationFinderPart2Texts");
    // ApplicationFinderPart2Texts
    ApplicationFinderPart2Texts = document.getElementsByClassName(
      "ApplicationFinderPart2Texts"
    );
    for (let i = 0; i < ApplicationFinderPart2Texts.length; i++) {
      ApplicationFinderPart2Texts[i].style.margin = "20px 0";
      ApplicationFinderPart2Texts[i].style.textAlign = "justify";
    }
  }
  function DisplayFinderRecent() {
    HideFinderMenusBackgrounds();
    FinderRecent.style.backgroundColor = "var(--buttonColor01)";
    ApplicationFinderPart2.innerHTML = ``;
  }
  function DisplayFinderApplications() {
    HideFinderMenusBackgrounds();
    FinderApplications.style.backgroundColor = "var(--buttonColor01)";
    ApplicationFinderPart2.innerHTML = ``;
  }
  function DisplayFinderDownloads() {
    HideFinderMenusBackgrounds();
    FinderDownloads.style.backgroundColor = "var(--buttonColor01)";
    ApplicationFinderPart2.innerHTML = ``;
  }
  function HideFinderMenusBackgrounds() {
    FinderAirdrop.style.backgroundColor = "transparent";
    FinderRecent.style.backgroundColor = "transparent";
    FinderApplications.style.backgroundColor = "transparent";
    FinderDownloads.style.backgroundColor = "transparent";
  }
  FinderWindowResized();
  addEventListener("resize", FinderWindowResized);

  function FinderWindowResized() {
    if (window.innerWidth <= 1500) {
      FinderMenus = document.getElementsByClassName("FinderMenus");
      for (let i = 0; i < FinderMenus.length; i++) {
        FinderMenus[i].style.margin = "5px 0px 5px 0px";
      }
    } else {
      for (let i = 0; i < FinderMenus.length; i++) {
        FinderMenus[i].style.margin = "5px 10px 5px 10px";
      }
    }

    if (window.innerWidth <= 1360) {
      ApplicationFinderParts.style.gridTemplateColumns = "1fr";
      ApplicationFinderParts.style.gridTemplateRows = "100px auto";
      ApplicationFinderPart1.style.display = "flex";
      ApplicationFinderPart1List.style.display = "flex";
      ApplicationFinderPart1.style.borderRadius = "10px 10px 0 0";
      H1.style.margin = "0";
      H1.innerHTML = "";

      for (let i = 0; i < FinderMenusLogo.length; i++) {
        FinderMenusLogo[i].style.display = "flex";
      }
      for (let i = 0; i < FinderMenusLogo.length; i++) {
        FinderMenusLogo[i].style.margin = "auto";
      }
    } else {
      ApplicationFinderParts.style.gridTemplateColumns = "1fr 2.5fr";
      ApplicationFinderParts.style.gridTemplateRows = "1fr";
      ApplicationFinderPart1.style.removeProperty("display");
      ApplicationFinderPart1List.style.removeProperty("display");
      ApplicationFinderPart1.style.borderRadius = "10px 0 0 10px";
      H1.style.margin = "30px";
      H1.innerHTML = "Finder";

      for (let i = 0; i < FinderMenusLogo.length; i++) {
        FinderMenusLogo[i].style.removeProperty("display");
      }

      for (let i = 0; i < FinderMenusLogo.length; i++) {
        FinderMenusLogo[i].style.margin = "0 0 0 10px";
      }
    }
  }
}
function LaunchLaunchPadApp() {
  LaunchApplication("50%", "50%", "100%", "100%", "");

  StatusBar.style.opacity = "0";
  Application.innerHTML = `
  <div id="LaunchPadList"></div>
  `;
  LaunchPadList = document.getElementById("LaunchPadList");
  LaunchPadList.style.backgroundColor = "var(--windowBackgroundColor02)";
  LaunchPadList.style.height = "100%";
  LaunchPadList.style.display = "block";

  LaunchPadList.innerHTML = `
  <img id="LaunchPadFinderIcon" src="./Assets/AppsIcons/finder.webp"></img>
  <img id="LaunchPadMailsIcon" src="./Assets/AppsIcons/mails.webp"></img>
  <img id="LaunchPadMapsIcon" src="./Assets/AppsIcons/maps.webp"></img>
  <img id="LaunchPadSafariIcon" src="./Assets/AppsIcons/safari.webp"></img>
  <img id="LaunchPadTeamsIcon" src="./Assets/AppsIcons/teams.webp"></img>
  <img id="LaunchPadTerminalIcon" src="./Assets/AppsIcons/terminal.webp"></img>
  <img id="LaunchPadVscodeIcon" src="./Assets/AppsIcons/vscode.webp"></img>  
  <img id="LaunchPadSettingsIcon" src="./Assets/AppsIcons/settings.webp"></img>
  `;
  // LaunchPadFinderIcon
  LaunchPadFinderIcon = document.getElementById("LaunchPadFinderIcon");
  LaunchPadFinderIcon.classList.add("LaunchPadIcons");
  // LaunchPadMailsIcon
  LaunchPadMailsIcon = document.getElementById("LaunchPadMailsIcon");
  LaunchPadMailsIcon.classList.add("LaunchPadIcons");
  // LaunchPadMapsIcon
  LaunchPadMapsIcon = document.getElementById("LaunchPadMapsIcon");
  LaunchPadMapsIcon.classList.add("LaunchPadIcons");
  // LaunchPadSafariIcon
  LaunchPadSafariIcon = document.getElementById("LaunchPadSafariIcon");
  LaunchPadSafariIcon.classList.add("LaunchPadIcons");
  // LaunchPadTeamsIcon
  LaunchPadTeamsIcon = document.getElementById("LaunchPadTeamsIcon");
  LaunchPadTeamsIcon.classList.add("LaunchPadIcons");
  // LaunchPadTerminalIcon
  LaunchPadTerminalIcon = document.getElementById("LaunchPadTerminalIcon");
  LaunchPadTerminalIcon.classList.add("LaunchPadIcons");
  // LaunchPadVscodeIcon
  LaunchPadVscodeIcon = document.getElementById("LaunchPadVscodeIcon");
  LaunchPadVscodeIcon.classList.add("LaunchPadIcons");
  // LaunchPadSettingsIcon
  LaunchPadSettingsIcon = document.getElementById("LaunchPadSettingsIcon");
  LaunchPadSettingsIcon.classList.add("LaunchPadIcons");
  //LaunchPadIcons
  LaunchPadIcons = document.getElementsByClassName("LaunchPadIcons");
  for (let i = 0; i < LaunchPadIcons.length; i++) {
    LaunchPadIcons[i].style.height = "120px";
    LaunchPadIcons[i].style.margin = "5% 0 0 5%";
    LaunchPadIcons[i].style.cursor = "pointer";
  }

  LaunchPadFinderIcon.addEventListener("click", LaunchFinderApp);
  LaunchPadMailsIcon.addEventListener("click", LaunchMailsApp);
  LaunchPadMapsIcon.addEventListener("click", LaunchMapsApp);
  LaunchPadSafariIcon.addEventListener("click", LaunchSafariApp);
  LaunchPadTeamsIcon.addEventListener("click", LaunchTeamsApp);
  LaunchPadTerminalIcon.addEventListener("click", LaunchTerminalApp);
  LaunchPadVscodeIcon.addEventListener("click", LaunchVscodeApp);
  LaunchPadSettingsIcon.addEventListener("click", LaunchSettingsApp);

  LaunchPadWindowResized();
  addEventListener("resize", LaunchPadWindowResized);

  function LaunchPadWindowResized() {
    if (window.innerWidth <= 1000) {
      for (let i = 0; i < LaunchPadIcons.length; i++) {
        LaunchPadIcons[i].style.height = "90px";
      }
    } else {
      for (let i = 0; i < LaunchPadIcons.length; i++) {
        LaunchPadIcons[i].style.height = "120px";
      }
    }
  }
}
function LaunchMailsApp() {
  LaunchApplication("50%", "50%", "50%", "40%", "Mails");

  Application.innerHTML = `
  <div id="ApplicationMailsParts">
    <div id="ApplicationMailsPart1"></div>
    <div id="ApplicationMailsPart2"></div>
  </div>
  `;

  // ApplicationMailsParts
  ApplicationMailsParts = document.getElementById("ApplicationMailsParts");
  ApplicationMailsParts.style.height = "100%";
  ApplicationMailsParts.style.display = "grid";
  ApplicationMailsParts.style.gridTemplateColumns = "1fr 2.5fr";
  // ApplicationMailsPart1
  ApplicationMailsPart1 = document.getElementById("ApplicationMailsPart1");
  ApplicationMailsPart1.style.backdropFilter = "blur(10px)";
  ApplicationMailsPart1.style.backgroundColor =
    "var(--windowBackgroundColor02)";
  ApplicationMailsPart1.innerHTML = `
    <h1>Mails</h1>
    `;

  //ApplicationMailsPart2
  ApplicationMailsPart2 = document.getElementById("ApplicationMailsPart2");
  ApplicationMailsPart2.style.backgroundColor =
    "var(--windowBackgroundColor01)";
  H1 = document.getElementsByTagName("H1")[0];
  H1.style.color = "var(--textColor)";
  H1.style.margin = "30px";
  H1.style.userSelect = "none";
}
function LaunchMapsApp() {
  LaunchApplication("50%", "40%", "70%", "60%", "Plan");
  Application.innerHTML = `
  <div id="ApplicationMapsParts">
    <div id="ApplicationMapsPart1"></div>
    <div id="ApplicationMapsPart2"></div>
  </div>`;
  // ApplicationMapsParts
  ApplicationMapsParts = document.getElementById("ApplicationMapsParts");
  ApplicationMapsParts.style.height = "100%";
  ApplicationMapsParts.style.display = "grid";
  ApplicationMapsParts.style.gridTemplateColumns = "1fr 2.5fr";
  // ApplicationMapsPart1
  ApplicationMapsPart1 = document.getElementById("ApplicationMapsPart1");
  ApplicationMapsPart1.style.backdropFilter = "blur(50px)";
  ApplicationMapsPart1.style.borderRadius = "10px 0 0 10px";
  ApplicationMapsPart1.style.overflowX = "auto";
  ApplicationMapsPart1.style.backgroundColor = "var(--windowBackgroundColor03)";
  ApplicationMapsPart1.innerHTML = `
  <h1>Plan</h1>
  <ul id="MapsPart1List">
    <li id="MapsPart1Home">
      <img id="MapsPart1HomeLogo" src="./Assets/Maps/MapsHouse.webp"></img>
      <span id="MapsPart1HomeTitle">Domicile</span>
    </li>
    <li id="MapsPart1School1">
      <img id="MapsPart1School7Logo" src="./Assets/Maps/MapsBuilding.webp"></img>
      <span id="MapsPart1School7Title">CFAI UIMM Saint-Etienne</span>
    </li>
    <li id="MapsPart1School2">
      <img id="MapsPart1School6Logo" src="./Assets/Maps/MapsBag.webp"></img>
      <span id="MapsPart1School6Title">Lycée Professionnel Le Marais Sainte Thérèse</span>
    </li>
    <li id="MapsPart1School3">
      <img id="MapsPart1School5Logo" src="./Assets/Maps/MapsBag.webp"></img>
      <span id="MapsPart1School5Title">Lycée Général Saint Paul Forez</span>
    </li>
    <li id="MapsPart1School4">
      <img id="MapsPart1School4Logo" src="./Assets/Maps/MapsBuilding2.webp"></img>
      <span id="MapsPart1School4Title">Collège Victor de Laprade</span>
    </li>
    <li id="MapsPart1School5">
      <img id="MapsPart1School3Logo" src="./Assets/Maps/MapsBuilding2.webp"></img>
      <span id="MapsPart1School3Title">Ecole Primaire Saint-Charles</span>
    </li>
    <li id="MapsPart1School6">
      <img id="MapsPart1School2Logo" src="./Assets/Maps/MapsPoint.webp"></img>
      <span id="MapsPart1School2Title">Ecole Maternelle Saint-Exupéry</span>
    </li>
    <li id="MapsPart1School7">
      <img id="MapsPart1School1Logo" src="./Assets/Maps/MapsPoint.webp"></img>
      <span id="MapsPart1School1Title">Ecole Maternelle Notre-Dame</span>
    </li>
  </ul>
  `;
  // MapsPart1List
  MapsPart1List = document.getElementById("MapsPart1List");
  MapsPart1List.style.margin = "20px";
  // MapsPart1List.style.height = "100%";
  // MapsPart1Home
  MapsPart1Home = document.getElementById("MapsPart1Home");
  MapsPart1Home.classList.add("MapsPart1Locations");
  MapsPart1Home.addEventListener("click", MapsDisplayHome);
  // MapsPart1HomeLogo
  MapsPart1HomeLogo = document.getElementById("MapsPart1HomeLogo");
  MapsPart1HomeLogo.classList.add("MapsPart1LocationsLogo");
  MapsPart1Home.addEventListener("click", MapsDisplayHome);
  // MapsPart1HomeTitle
  MapsPart1HomeTitle = document.getElementById("MapsPart1HomeTitle");
  MapsPart1HomeTitle.classList.add("MapsPart1LocationsTitle");
  // MapsPart1School1
  MapsPart1School1 = document.getElementById("MapsPart1School1");
  MapsPart1School1.classList.add("MapsPart1Locations");
  MapsPart1School1.addEventListener("click", MapsDisplaySchool1);
  // MapsPart1School1Logo
  MapsPart1School1Logo = document.getElementById("MapsPart1School1Logo");
  MapsPart1School1Logo.classList.add("MapsPart1LocationsLogo");
  // MapsPart1School1Title
  MapsPart1School1Title = document.getElementById("MapsPart1School1Title");
  MapsPart1School1Title.classList.add("MapsPart1LocationsTitle");
  // MapsPart1School2
  MapsPart1School2 = document.getElementById("MapsPart1School2");
  MapsPart1School2.classList.add("MapsPart1Locations");
  MapsPart1School2.addEventListener("click", MapsDisplaySchool2);
  // MapsPart1School2Logo
  MapsPart1School2Logo = document.getElementById("MapsPart1School2Logo");
  MapsPart1School2Logo.classList.add("MapsPart1LocationsLogo");
  // MapsPart1School2Title
  MapsPart1School2Title = document.getElementById("MapsPart1School2Title");
  MapsPart1School2Title.classList.add("MapsPart1LocationsTitle");
  // MapsPart1School3
  MapsPart1School3 = document.getElementById("MapsPart1School3");
  MapsPart1School3.classList.add("MapsPart1Locations");
  MapsPart1School3.addEventListener("click", MapsDisplaySchool3);
  // MapsPart1School3Logo
  MapsPart1School3Logo = document.getElementById("MapsPart1School3Logo");
  MapsPart1School3Logo.classList.add("MapsPart1LocationsLogo");
  // MapsPart1School3Title
  MapsPart1School3Title = document.getElementById("MapsPart1School3Title");
  MapsPart1School3Title.classList.add("MapsPart1LocationsTitle");
  // MapsPart1School4
  MapsPart1School4 = document.getElementById("MapsPart1School4");
  MapsPart1School4.classList.add("MapsPart1Locations");
  MapsPart1School4.addEventListener("click", MapsDisplaySchool4);
  // MapsPart1School4Logo
  MapsPart1School4Logo = document.getElementById("MapsPart1School4Logo");
  MapsPart1School4Logo.classList.add("MapsPart1LocationsLogo");
  // MapsPart1School4Title
  MapsPart1School4Title = document.getElementById("MapsPart1School4Title");
  MapsPart1School4Title.classList.add("MapsPart1LocationsTitle");
  // MapsPart1School5
  MapsPart1School5 = document.getElementById("MapsPart1School5");
  MapsPart1School5.classList.add("MapsPart1Locations");
  MapsPart1School5.addEventListener("click", MapsDisplaySchool5);
  // MapsPart1School5Logo
  MapsPart1School5Logo = document.getElementById("MapsPart1School5Logo");
  MapsPart1School5Logo.classList.add("MapsPart1LocationsLogo");
  // MapsPart1School5Title
  MapsPart1School5Title = document.getElementById("MapsPart1School5Title");
  MapsPart1School5Title.classList.add("MapsPart1LocationsTitle");
  // MapsPart1School6
  MapsPart1School6 = document.getElementById("MapsPart1School6");
  MapsPart1School6.classList.add("MapsPart1Locations");
  MapsPart1School6.addEventListener("click", MapsDisplaySchool6);
  // MapsPart1School6Logo
  MapsPart1School6Logo = document.getElementById("MapsPart1School6Logo");
  MapsPart1School6Logo.classList.add("MapsPart1LocationsLogo");
  // MapsPart1School6Title
  MapsPart1School6Title = document.getElementById("MapsPart1School6Title");
  MapsPart1School6Title.classList.add("MapsPart1LocationsTitle");
  // MapsPart1School7
  MapsPart1School7 = document.getElementById("MapsPart1School7");
  MapsPart1School7.classList.add("MapsPart1Locations");
  MapsPart1School7.addEventListener("click", MapsDisplaySchool7);
  // MapsPart1School7Logo
  MapsPart1School7Logo = document.getElementById("MapsPart1School7Logo");
  MapsPart1School7Logo.classList.add("MapsPart1LocationsLogo");
  // MapsPart1School7Title
  MapsPart1School7Title = document.getElementById("MapsPart1School7Title");
  MapsPart1School7Title.classList.add("MapsPart1LocationsTitle");
  // MapsPart1Locations
  MapsPart1Locations = document.getElementsByClassName("MapsPart1Locations");
  for (let i = 0; i < MapsPart1Locations.length; i++) {
    MapsPart1Locations[i].style.color = "var(--textColor)";
    MapsPart1Locations[i].style.fontSize = "1.2em";
    MapsPart1Locations[i].style.marginTop = "20px";
    MapsPart1Locations[i].style.cursor = "pointer";
    MapsPart1Locations[i].style.padding = "5px 10px 5px 10px";
    MapsPart1Locations[i].style.borderRadius = "5px";
    MapsPart1Locations[i].style.transition = "50ms";
    MapsPart1Locations[i].style.display = "flex";
  }
  // MapsPart1LocationsLogo
  MapsPart1LocationsLogo = document.getElementsByClassName(
    "MapsPart1LocationsLogo"
  );
  for (let i = 0; i < MapsPart1LocationsLogo.length; i++) {
    MapsPart1LocationsLogo[i].style.height = "40px";
  }
  // MapsPart1LocationsTitle
  MapsPart1LocationsTitle = document.getElementsByClassName(
    "MapsPart1LocationsTitle"
  );
  for (let i = 0; i < MapsPart1LocationsTitle.length; i++) {
    MapsPart1LocationsTitle[i].style.marginTop = "auto";
    MapsPart1LocationsTitle[i].style.marginBottom = "auto";
    MapsPart1LocationsTitle[i].style.marginLeft = "10px";
  }

  //ApplicationMapsPart2
  ApplicationMapsPart2 = document.getElementById("ApplicationMapsPart2");
  ApplicationMapsPart2.style.backgroundColor = "var(--windowBackgroundColor01)";
  H1 = document.getElementsByTagName("H1")[0];
  H1.style.color = "var(--textColor)";
  H1.style.margin = "30px";
  H1.style.userSelect = "none";

  MapsDisplayHome();

  function MapsDisplayHome() {
    MapsResetAllLocations();
    MapsPart1Home.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsDisplaySchool1() {
    MapsResetAllLocations();
    MapsPart1School1.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsDisplaySchool2() {
    MapsResetAllLocations();
    MapsPart1School2.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsDisplaySchool3() {
    MapsResetAllLocations();
    MapsPart1School3.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsDisplaySchool4() {
    MapsResetAllLocations();
    MapsPart1School4.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsDisplaySchool5() {
    MapsResetAllLocations();
    MapsPart1School5.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsDisplaySchool6() {
    MapsResetAllLocations();
    MapsPart1School6.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsDisplaySchool7() {
    MapsResetAllLocations();
    MapsPart1School7.style.backgroundColor = "var(--buttonColor02)";
    ApplicationMapsPart2.innerHTML = ``;
  }
  function MapsResetAllLocations() {
    for (let i = 0; i < MapsPart1Locations.length; i++) {
      MapsPart1Locations[i].style.backgroundColor = "transparent";
    }
  }

  addEventListener("resize", MapsWindowResized);
  MapsWindowResized();

  function MapsWindowResized() {
    if (window.innerWidth <= 850) {
      ApplicationMapsParts.style.gridTemplateColumns = "1fr 2fr";
    } else {
      ApplicationMapsParts.style.gridTemplateColumns = "1fr 2.5fr";
    }

    if (window.innerWidth <= 730) {
      ApplicationMapsParts.style.gridTemplateColumns = "1fr";
      ApplicationMapsParts.style.gridTemplateRows = "90px auto";
      H1.style.margin = "0";
      H1.innerHTML = "";
      MapsPart1List.style.display = "flex";

      for (let i = 0; i < MapsPart1Locations.length; i++) {
        MapsPart1Locations[i].style.marginTop = "0px";
      }

      for (let i = 0; i < MapsPart1LocationsTitle.length; i++) {
        MapsPart1LocationsTitle[i].style.width = "max-content";
      }
    } else {
      ApplicationMapsParts.style.gridTemplateColumns = "1fr 2fr";
      ApplicationMapsParts.style.gridTemplateRows = "1fr";
      H1.style.margin = "30px";
      H1.innerHTML = "Plan";
      MapsPart1List.style.removeProperty("display");
      for (let i = 0; i < MapsPart1Locations.length; i++) {
        MapsPart1Locations[i].style.marginTop = "20px";
      }
    }
  }
}
function LaunchSafariApp() {
  LaunchApplication("50%", "50%", "70%", "70%", "Finder");
  Application.innerHTML = `
  <div id="ApplicationSafariPart"></div>
  `;
  ApplicationSafariPart = document.getElementById("ApplicationSafariPart");
  ApplicationSafariPart.style.height = "100%";
  ApplicationSafariPart.style.backgroundColor =
    "var(--windowBackgroundColor01)";
  ApplicationSafariPart.innerHTML = `
  <form id="SafariSearchInputContainer">
  <input type="text" id="SafariSearchInput"></input>
  </form>
  
  <div id="SafariWebContainer">
  <iframe id="SafariWebContainerIframe" type="text/html" src="https://www.google.com/?igu=1"></iframe>
  </div>
  `;
  SafariWebContainer = document.getElementById("SafariWebContainer");
  SafariWebContainer.style.height = "100%";
  SafariWebContainer.style.paddingTop = "20px";
  // SafariSearchInputContainer
  SafariSearchInputContainer = document.getElementById(
    "SafariSearchInputContainer"
  );
  SafariSearchInputContainer.style.display = "flex";
  SafariSearchInputContainer.addEventListener("submit", SafariSearchInput);
  // SafariSearchInput
  SafariSearchInput = document.getElementById("SafariSearchInput");
  SafariSearchInput.style.margin = "auto";
  SafariSearchInput.style.marginTop = "20px";
  SafariSearchInput.style.backgroundColor = "var(--windowBackgroundColor02)";
  SafariSearchInput.style.borderRadius = "5px";
  SafariSearchInput.style.width = "50%";
  SafariSearchInput.style.height = "30px";
  SafariSearchInput.style.padding = "0 30px 0 30px";
  SafariSearchInput.style.border = "1px solid var(--menuElementColor01)";
  SafariSearchInput.style.color = "var(--textColor)";
  SafariSearchInput.style.textAlign = "left";
  SafariSearchInput.value = SafariWebContainerIframe.src;

  function SafariSearchInput(event) {
    event.preventDefault();
    SafariWebContainerIframe.src = SafariSearchInput.value;
  }
  // SafariWebContainerIframe
  SafariWebContainerIframe = document.getElementById(
    "SafariWebContainerIframe"
  );
  SafariWebContainerIframe.style.border = "none";
  SafariWebContainerIframe.style.height = "100%";
  SafariWebContainerIframe.style.width = "100%";
  SafariWebContainerIframe.addEventListener(
    "load",
    SafariWebContainerIframeLoad
  );

  function SafariWebContainerIframeLoad() {
    if (SafariWebContainerIframe.contentDocument.title == "Error") {
      SafariWebContainerIframe.src = "https://www.google.com/?igu=1";
      SafariSearchInput.value = "https://www.google.com/?igu=1";
    }
  }
}
function LaunchTeamsApp() {
  LaunchApplication("50%", "60%", "70%", "60%", "Microsoft Teams");
  Application.innerHTML = `
  <div id="ApplicationTeamsParts"></div>
  `;
  // ApplicationTeamsParts
  ApplicationTeamsParts = document.getElementById("ApplicationTeamsParts");
  ApplicationTeamsParts.style.height = "100%";
  ApplicationTeamsParts.style.userSelect = "none";
  ApplicationTeamsParts.style.display = "grid";
  ApplicationTeamsParts.style.color = "var(--textColor)";
  ApplicationTeamsParts.style.gridTemplateColumns = "1fr 1.5fr";
  ApplicationTeamsParts.innerHTML = `
  <div id="ApplicationTeamsPart1"></div>
  <div id="ApplicationTeamsPart2"></div>
  `;
  // ApplicationTeamsPart1
  ApplicationTeamsPart1 = document.getElementById("ApplicationTeamsPart1");
  ApplicationTeamsPart1.style.backgroundColor = "var(--teamsBackgroundColor04)";
  ApplicationTeamsPart1.style.display = "grid";
  ApplicationTeamsPart1.style.overflow = "hidden";
  ApplicationTeamsPart1.style.gridTemplateColumns = "0.8fr 3fr";
  ApplicationTeamsPart1.innerHTML = `
  <div id="TeamsMenuBar"></div>
  <div id="TeamsConversationsList"></div>
  `;
  // TeamsMenuBar
  TeamsMenuBar = document.getElementById("TeamsMenuBar");
  TeamsMenuBar.style.backgroundColor = "var(--teamsBackgroundColor01)";
  TeamsMenuBar.style.height = "100%";
  TeamsMenuBar.style.margin = "50px auto auto auto";
  TeamsMenuBar.innerHTML = `
  <ul id="TeamsMenuBarList">
    <li id="TeamsMenuBarElement1">
    <img id="TeamsMenuBarElement1Logo" src="./Assets/Teams/Icons/Messages.webp"></img>
      <span id="TeamsMenuBarElement1Title">Conversations</span>
    </li>
    <li  id="TeamsMenuBarElement2">
    <img id="TeamsMenuBarElement2Logo" src="./Assets/Teams/Icons/Participants.webp"></img>
     <span id="TeamsMenuBarElement2Title">Equipes</span>
    </li>
    <li  id="TeamsMenuBarElement3">
    <img id="TeamsMenuBarElement3Logo" src="./Assets/Teams/Icons/BreakoutRoom.webp"></img>
      <span id="TeamsMenuBarElement3Title">Calendrier</span></li>
  </ul>
  `;
  // TeamsMenuBarList
  TeamsMenuBarList = document.getElementById("TeamsMenuBarList");
  TeamsMenuBarList.style.marginTop = "40px";
  // TeamsMenuBarElement1
  TeamsMenuBarElement1 = document.getElementById("TeamsMenuBarElement1");
  TeamsMenuBarElement1.style.backgroundColor = "var(--teamsElementColor01)";
  TeamsMenuBarElement1.classList.add("TeamsMenuBarElements");
  // TeamsMenuBarElement1Logo
  TeamsMenuBarElement1Logo = document.getElementById(
    "TeamsMenuBarElement1Logo"
  );

  TeamsMenuBarElement1Logo.classList.add("TeamsMenuBarElementsLogo");
  // TeamsMenuBarElement1Title
  TeamsMenuBarElement1Title = document.getElementById(
    "TeamsMenuBarElement1Title"
  );
  TeamsMenuBarElement1Title.classList.add("TeamsMenuBarElementsTitle");
  // TeamsMenuBarElement2
  TeamsMenuBarElement2 = document.getElementById("TeamsMenuBarElement2");
  TeamsMenuBarElement2.classList.add("TeamsMenuBarElements");
  // TeamsMenuBarElement2Logo
  TeamsMenuBarElement2Logo = document.getElementById(
    "TeamsMenuBarElement2Logo"
  );
  TeamsMenuBarElement2Logo.classList.add("TeamsMenuBarElementsLogo");
  // TeamsMenuBarElement2Title
  TeamsMenuBarElement2Title = document.getElementById(
    "TeamsMenuBarElement2Title"
  );
  TeamsMenuBarElement2Title.classList.add("TeamsMenuBarElementsTitle");
  // TeamsMenuBarElement3
  TeamsMenuBarElement3 = document.getElementById("TeamsMenuBarElement3");
  TeamsMenuBarElement3.classList.add("TeamsMenuBarElements");
  // TeamsMenuBarElement3Logo
  TeamsMenuBarElement3Logo = document.getElementById(
    "TeamsMenuBarElement3Logo"
  );
  TeamsMenuBarElement3Logo.classList.add("TeamsMenuBarElementsLogo");
  // TeamsMenuBarElement3Title
  TeamsMenuBarElement3Title = document.getElementById(
    "TeamsMenuBarElement3Title"
  );
  TeamsMenuBarElement3Title.classList.add("TeamsMenuBarElementsTitle");
  // TeamsMenuBarElements
  TeamsMenuBarElements = document.getElementsByClassName(
    "TeamsMenuBarElements"
  );
  if (SystemTheme == "light") {
    TeamsMenuBarElement1Logo.style.filter = "invert(1)";
    TeamsMenuBarElement2Logo.style.filter = "invert(1)";
    TeamsMenuBarElement3Logo.style.filter = "invert(1)";
  }
  for (let i = 0; i < TeamsMenuBarElements.length; i++) {
    TeamsMenuBarElements[i].style.textAlign = "center";
    TeamsMenuBarElements[i].style.cursor = "pointer";
    TeamsMenuBarElements[i].style.marginTop = "10px";
    TeamsMenuBarElements[i].style.padding = "10px";
    TeamsMenuBarElements[i].style.margin = "10px";
    TeamsMenuBarElements[i].style.borderRadius = "5px";
  }

  // TeamsMenuBarElementsLogo
  TeamsMenuBarElementsLogo = document.getElementsByClassName(
    "TeamsMenuBarElementsLogo"
  );
  for (let i = 0; i < TeamsMenuBarElementsLogo.length; i++) {
    TeamsMenuBarElementsLogo[i].style.height = "50px";
  }
  // TeamsMenuBarElementsTitle
  TeamsMenuBarElementsTitle = document.getElementsByClassName(
    "TeamsMenuBarElementsTitle"
  );
  // TeamsConversationsList
  TeamsConversationsList = document.getElementById("TeamsConversationsList");
  TeamsConversationsList.style.marginTop = "50px";
  TeamsConversationsList.style.backgroundColor =
    "var(--teamsBackgroundColor02)";
  TeamsConversationsList.innerHTML = `
  <h2 id="TeamsConversationListTitle">Conversation</h2>
  <ul id="TeamsConversationsL">
    <li id="TeamsConversation1">
    <img id="TeamsConversation1Profile" src="./Assets/Logos/memoji1.webp"></img>
      <span id="TeamsConversation1Title">Pierre</span>
    </li>
    <li id="TeamsConversation2">
    <img id="TeamsConversation2Profile" src="./Assets/Logos/memoji2.webp"></img>
      <span id="TeamsConversation2Title">Kilian</span>
    </li>
    <li id="TeamsConversation3">
    <img id="TeamsConversation3Profile" src="./Assets/Logos/memoji3.webp"></img>
      <span id="TeamsConversation3Title">Alicia</span>
    </li>
  </ul>
  `;
  // TeamsConversationListTitle
  TeamsConversationListTitle = document.getElementById(
    "TeamsConversationListTitle"
  );
  TeamsConversationListTitle.style.margin = "40px 0 40px 40px";
  // TeamsConversationsL
  TeamsConversationsL = document.getElementById("TeamsConversationsL");
  TeamsConversationsL.style.margin = "20px";

  // TeamsConversation1
  TeamsConversation1 = document.getElementById("TeamsConversation1");
  TeamsConversation1.addEventListener("click", TeamsDisplayConversation1);
  TeamsConversation1.classList.add("TeamsConversations");

  // TeamsConversation1Profile
  TeamsConversation1Profile = document.getElementById(
    "TeamsConversation1Profile"
  );
  TeamsConversation1Profile.classList.add("TeamsConversationProfile");

  // TeamsConversation1Title
  TeamsConversation1Title = document.getElementById("TeamsConversation1Title");
  TeamsConversation1Title.classList.add("TeamsConversationsTitles");

  // TeamsConversation2
  TeamsConversation2 = document.getElementById("TeamsConversation2");
  TeamsConversation2.addEventListener("click", TeamsDisplayConversation2);
  TeamsConversation2.classList.add("TeamsConversations");

  // TeamsConversation2Profile
  TeamsConversation2Profile = document.getElementById(
    "TeamsConversation2Profile"
  );
  TeamsConversation2Profile.classList.add("TeamsConversationProfile");

  // TeamsConversation2Title
  TeamsConversation2Title = document.getElementById("TeamsConversation2Title");
  TeamsConversation2Title.classList.add("TeamsConversationsTitles");

  // TeamsConversation3
  TeamsConversation3 = document.getElementById("TeamsConversation3");
  TeamsConversation3.addEventListener("click", TeamsDisplayConversation3);
  TeamsConversation3.classList.add("TeamsConversations");

  // TeamsConversation3Profile
  TeamsConversation3Profile = document.getElementById(
    "TeamsConversation3Profile"
  );
  TeamsConversation3Profile.classList.add("TeamsConversationProfile");

  // TeamsConversation3Title
  TeamsConversation3Title = document.getElementById("TeamsConversation3Title");
  TeamsConversation3Title.classList.add("TeamsConversationsTitles");

  // TeamsConversations
  TeamsConversations = document.getElementsByClassName("TeamsConversations");
  for (let i = 0; i < TeamsConversations.length; i++) {
    TeamsConversations[i].style.padding = "20px";
    TeamsConversations[i].style.display = "flex";
    TeamsConversations[i].style.borderRadius = "5px";
    TeamsConversations[i].style.cursor = "pointer";
    TeamsConversations[i].style.backgroundColor = "var(--teamsElementColor01)";
  }

  // TeamsConversationProfile
  TeamsConversationProfile = document.getElementsByClassName(
    "TeamsConversationProfile"
  );
  for (let i = 0; i < TeamsConversationProfile.length; i++) {
    TeamsConversationProfile[i].style.height = "50px";
  }

  // TeamsConversationsTitles
  TeamsConversationsTitles = document.getElementsByClassName(
    "TeamsConversationsTitles"
  );
  for (let i = 0; i < TeamsConversationsTitles.length; i++) {
    TeamsConversationsTitles[i].style.fontSize = "1.2em";
    TeamsConversationsTitles[i].style.margin = "auto 0 auto 10px";
  }
  TeamsDisplayConversation1();

  function TeamsDisplayConversation1() {
    TeamsResetConversations();
    TeamsConversation1.style.backgroundColor = "var(--teamsElementColor01)";
    // ApplicationTeamsPart2
    ApplicationTeamsPart2 = document.getElementById("ApplicationTeamsPart2");
    ApplicationTeamsPart2.style.backgroundColor =
      "var(--teamsBackgroundColor04)";
    ApplicationTeamsPart2.style.display = "grid";
    ApplicationTeamsPart2.style.gridTemplateRows = "50px";
    ApplicationTeamsPart2.innerHTML = `
  <form id="TeamsPart2SearchBarContainer">
    <input type="text" placeholder="Rechercher" id="TeamsPart2SearchBar"></input>
    <img src="./Assets/Logos/profile.webp" id="TeamsPart2Profile"></img>
    </form>
  <div id="TeamsConversationData"></div>
  `;
    // TeamsPart2SearchBarContainer
    TeamsPart2SearchBarContainer = document.getElementById(
      "TeamsPart2SearchBarContainer"
    );
    TeamsPart2SearchBarContainer.style.height = "50px";
    TeamsPart2SearchBarContainer.style.display = "flex";
    TeamsPart2SearchBarContainer.addEventListener("submit", (event) =>
      event.preventDefault()
    );
    // TeamsPart2SearchBar
    TeamsPart2SearchBar = document.getElementById("TeamsPart2SearchBar");
    TeamsPart2SearchBar.style.margin = "auto auto auto 2px";
    TeamsPart2SearchBar.style.backgroundColor = "var(--teamsElementColor01)";
    TeamsPart2SearchBar.style.borderRadius = "5px";
    TeamsPart2SearchBar.style.border = "none";
    TeamsPart2SearchBar.style.padding = "10px 6px 10px 6px";
    TeamsPart2SearchBar.style.width = "70%";
    TeamsPart2SearchBar.style.color = "var(--textColor)";

    // TeamsConversationData
    TeamsConversationData = document.getElementById("TeamsConversationData");
    TeamsConversationData.style.backgroundColor =
      "var(--teamsBackgroundColor03)";
    TeamsConversationData.style.display = "grid";
    TeamsConversationData.style.gridTemplateRows = "50px auto 70px";
    TeamsConversationData.style.height = "100%";
    TeamsConversationData.innerHTML = `
  <h2 id="TeamsConversationDataTitle">Pierre</h2>
  <div id="TeamsConversationDataMessages"></div>
  <div id="TeamsConversationDataSend"></div>
  `;
    // TeamsPart2Profile
    TeamsPart2Profile = document.getElementById("TeamsPart2Profile");
    TeamsPart2Profile.style.height = "35px";
    TeamsPart2Profile.style.width = "35px";
    TeamsPart2Profile.style.cursor = "pointer";
    TeamsPart2Profile.style.borderRadius = "100px";
    TeamsPart2Profile.style.margin = "10px";
    // TeamsConversationDataTitle
    TeamsConversationDataTitle = document.getElementById(
      "TeamsConversationDataTitle"
    );
    TeamsConversationDataTitle.style.margin = "20px 0 0 20px";
    // TeamsConversationDataMessages
    TeamsConversationDataMessages = document.getElementById(
      "TeamsConversationDataMessages"
    );
    TeamsConversationDataMessages.style.overflow = "auto";
    TeamsConversationDataMessages.innerHTML = `
  <ul id="TeamsConversationDataMessagesList">
    <li id="TeamsConversationDataMessage1">
      <img id="TeamsConversationDataMessagePhoto1" src="./Assets/Logos/memoji1.webp"></img>
      <div id="TeamsConversationDataMessageData1">
        <span id="TeamsConversationDataMessageData1Author">Pierre</span>
        <span>Salut, comment ça va ?</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage2">
      <img id="TeamsConversationDataMessagePhoto2" src="./Assets/Logos/profile.webp"></img>
      <div id="TeamsConversationDataMessageData2">
        <span id="TeamsConversationDataMessageData2Author">Périco</span>
        <span>Super !!!! Et toi ?</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage3">
      <img id="TeamsConversationDataMessagePhoto3" src="./Assets/Logos/memoji1.webp"></img>
      <div id="TeamsConversationDataMessageData3">
        <span id="TeamsConversationDataMessageData3Author">Pierre</span>
        <span>Ça va ça va</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage4">
      <img id="TeamsConversationDataMessagePhoto4" src="./Assets/Logos/profile.webp"></img>
      <div id="TeamsConversationDataMessageData4">
        <span id="TeamsConversationDataMessageData4Author">Périco</span>
        <span>Nickel</span>
      </div>
    </li>



  </ul>
  `;

    // TeamsConversationDataMessagesList
    TeamsConversationDataMessagesList = document.getElementById(
      "TeamsConversationDataMessagesList"
    );
    TeamsConversationDataMessagesList.style.height = "0";
    TeamsConversationDataMessagesList.style.margin = "20px";
    TeamsConversationDataMessages.style.backgroundColor =
      "var(--teamsBackgroundColor03)";

    // TeamsConversationDataMessage1
    TeamsConversationDataMessage1 = document.getElementById(
      "TeamsConversationDataMessage1"
    );
    TeamsConversationDataMessage1.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto1
    TeamsConversationDataMessagePhoto1 = document.getElementById(
      "TeamsConversationDataMessagePhoto1"
    );
    TeamsConversationDataMessagePhoto1.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData1
    TeamsConversationDataMessageData1 = document.getElementById(
      "TeamsConversationDataMessageData1"
    );
    TeamsConversationDataMessageData1.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData1Author
    TeamsConversationDataMessageData1Author = document.getElementById(
      "TeamsConversationDataMessageData1Author"
    );
    TeamsConversationDataMessageData1Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage2
    TeamsConversationDataMessage2 = document.getElementById(
      "TeamsConversationDataMessage2"
    );
    TeamsConversationDataMessage2.style.marginLeft = "50%";
    TeamsConversationDataMessage2.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto2
    TeamsConversationDataMessagePhoto2 = document.getElementById(
      "TeamsConversationDataMessagePhoto2"
    );
    TeamsConversationDataMessagePhoto2.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData2
    TeamsConversationDataMessageData2 = document.getElementById(
      "TeamsConversationDataMessageData2"
    );
    TeamsConversationDataMessageData2.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData2Author
    TeamsConversationDataMessageData2Author = document.getElementById(
      "TeamsConversationDataMessageData2Author"
    );
    TeamsConversationDataMessageData2Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage3
    TeamsConversationDataMessage3 = document.getElementById(
      "TeamsConversationDataMessage3"
    );
    TeamsConversationDataMessage3.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto3
    TeamsConversationDataMessagePhoto3 = document.getElementById(
      "TeamsConversationDataMessagePhoto3"
    );
    TeamsConversationDataMessagePhoto3.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData3
    TeamsConversationDataMessageData3 = document.getElementById(
      "TeamsConversationDataMessageData3"
    );
    TeamsConversationDataMessageData3.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData3Author
    TeamsConversationDataMessageData3Author = document.getElementById(
      "TeamsConversationDataMessageData3Author"
    );
    TeamsConversationDataMessageData3Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage4
    TeamsConversationDataMessage4 = document.getElementById(
      "TeamsConversationDataMessage4"
    );
    TeamsConversationDataMessage4.scrollIntoView();
    TeamsConversationDataMessage4.style.marginLeft = "50%";
    TeamsConversationDataMessage4.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto4
    TeamsConversationDataMessagePhoto4 = document.getElementById(
      "TeamsConversationDataMessagePhoto4"
    );
    TeamsConversationDataMessagePhoto4.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData4
    TeamsConversationDataMessageData4 = document.getElementById(
      "TeamsConversationDataMessageData4"
    );
    TeamsConversationDataMessageData4.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData4Author
    TeamsConversationDataMessageData4Author = document.getElementById(
      "TeamsConversationDataMessageData4Author"
    );
    TeamsConversationDataMessageData4Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessages
    TeamsConversationDataMessages = document.getElementsByClassName(
      "TeamsConversationDataMessages"
    );
    for (let i = 0; i < TeamsConversationDataMessages.length; i++) {
      TeamsConversationDataMessages[i].style.display = "flex";
      TeamsConversationDataMessages[i].style.width = "min-content";
      TeamsConversationDataMessages[i].style.marginTop = "30px";
      TeamsConversationDataMessages[i].style.padding = "10px";
      TeamsConversationDataMessages[i].style.borderRadius = "5px";
      TeamsConversationDataMessages[i].style.backgroundColor =
        "var(--teamsElementColor01)";
    }
    // TeamsConversationDataMessagesPhoto
    TeamsConversationDataMessagesPhoto = document.getElementsByClassName(
      "TeamsConversationDataMessagesPhoto"
    );
    for (let i = 0; i < TeamsConversationDataMessagesPhoto.length; i++) {
      TeamsConversationDataMessagesPhoto[i].style.height = "60px";
    }
    // TeamsConversationDataMessagesData
    TeamsConversationDataMessagesData = document.getElementsByClassName(
      "TeamsConversationDataMessagesData"
    );
    for (let i = 0; i < TeamsConversationDataMessagesData.length; i++) {
      TeamsConversationDataMessagesData[i].style.display = "grid";
      TeamsConversationDataMessagesData[i].style.marginLeft = "20px";
      TeamsConversationDataMessagesData[i].style.marginTop = "10px";
      TeamsConversationDataMessagesData[i].style.width = "150px";
    }
    // TeamsConversationDataMessagesDataAuthor
    TeamsConversationDataMessagesDataAuthor = document.getElementsByClassName(
      "TeamsConversationDataMessagesDataAuthor"
    );
    for (let i = 0; i < TeamsConversationDataMessagesDataAuthor.length; i++) {
      TeamsConversationDataMessagesDataAuthor[i].style.fontSize = "1.2em";
      TeamsConversationDataMessagesDataAuthor[i].style.marginBottom = "5px";
    }

    // TeamsConversationDataSend
    TeamsConversationDataSend = document.getElementById(
      "TeamsConversationDataSend"
    );
    TeamsConversationDataSend.style.backgroundColor =
      "var(--teamsBackgroundColor03)";
    TeamsConversationDataSend.innerHTML = `
  <form id="TeamsConversationSendForm">
    <input id="TeamsConversationSendInput" type="text" placeholder="Saisissez un message"></input>
  </form>
  `;

    // TeamsConversationSendForm
    TeamsConversationSendForm = document.getElementById(
      "TeamsConversationSendForm"
    );
    TeamsConversationSendForm.style.display = "flex";
    TeamsConversationSendForm.style.height = "100%";
    TeamsConversationSendForm.addEventListener("submit", (event) =>
      event.preventDefault()
    );
    // TeamsConversationSendInput
    TeamsConversationSendInput = document.getElementById(
      "TeamsConversationSendInput"
    );
    TeamsConversationSendInput.style.margin = "auto";
    TeamsConversationSendInput.style.backgroundColor =
      "var(--teamsElementColor01)";
    TeamsConversationSendInput.style.borderRadius = "5px";
    TeamsConversationSendInput.style.border = "none";
    TeamsConversationSendInput.style.padding = "10px 6px 10px 6px";
    TeamsConversationSendInput.style.width = "70%";
    TeamsConversationSendInput.style.color = "var(--textColor)";
    TeamsWindowResized();
  }
  function TeamsDisplayConversation2() {
    TeamsResetConversations();
    TeamsConversation2.style.backgroundColor = "var(--teamsElementColor01)";
    // ApplicationTeamsPart2
    ApplicationTeamsPart2 = document.getElementById("ApplicationTeamsPart2");
    ApplicationTeamsPart2.style.backgroundColor =
      "var(--teamsBackgroundColor04)";
    ApplicationTeamsPart2.style.display = "grid";
    ApplicationTeamsPart2.style.gridTemplateRows = "50px";
    ApplicationTeamsPart2.innerHTML = `
  <form id="TeamsPart2SearchBarContainer">
    <input type="text" placeholder="Rechercher" id="TeamsPart2SearchBar"></input>
    <img src="./Assets/Logos/profile.webp" id="TeamsPart2Profile"></img>
    </form>
  <div id="TeamsConversationData"></div>
  `;
    // TeamsPart2SearchBarContainer
    TeamsPart2SearchBarContainer = document.getElementById(
      "TeamsPart2SearchBarContainer"
    );
    TeamsPart2SearchBarContainer.style.height = "50px";
    TeamsPart2SearchBarContainer.style.display = "flex";
    TeamsPart2SearchBarContainer.addEventListener("submit", (event) =>
      event.preventDefault()
    );
    // TeamsPart2SearchBar
    TeamsPart2SearchBar = document.getElementById("TeamsPart2SearchBar");
    TeamsPart2SearchBar.style.margin = "auto auto auto 2px";
    TeamsPart2SearchBar.style.backgroundColor = "var(--teamsElementColor01)";
    TeamsPart2SearchBar.style.borderRadius = "5px";
    TeamsPart2SearchBar.style.border = "none";
    TeamsPart2SearchBar.style.padding = "10px 6px 10px 6px";
    TeamsPart2SearchBar.style.width = "70%";
    TeamsPart2SearchBar.style.color = "var(--textColor)";

    // TeamsConversationData
    TeamsConversationData = document.getElementById("TeamsConversationData");
    TeamsConversationData.style.backgroundColor =
      "var(--teamsBackgroundColor03)";
    TeamsConversationData.style.display = "grid";
    TeamsConversationData.style.gridTemplateRows = "50px auto 70px";
    TeamsConversationData.style.height = "100%";
    TeamsConversationData.innerHTML = `
  <h2 id="TeamsConversationDataTitle">Kilian</h2>
  <div id="TeamsConversationDataMessages"></div>
  <div id="TeamsConversationDataSend"></div>
  `;
    // TeamsPart2Profile
    TeamsPart2Profile = document.getElementById("TeamsPart2Profile");
    TeamsPart2Profile.style.height = "35px";
    TeamsPart2Profile.style.width = "35px";
    TeamsPart2Profile.style.cursor = "pointer";
    TeamsPart2Profile.style.borderRadius = "100px";
    TeamsPart2Profile.style.margin = "10px";
    // TeamsConversationDataTitle
    TeamsConversationDataTitle = document.getElementById(
      "TeamsConversationDataTitle"
    );
    TeamsConversationDataTitle.style.margin = "20px 0 0 20px";
    // TeamsConversationDataMessages
    TeamsConversationDataMessages = document.getElementById(
      "TeamsConversationDataMessages"
    );
    TeamsConversationDataMessages.style.overflow = "auto";
    TeamsConversationDataMessages.innerHTML = `
  <ul id="TeamsConversationDataMessagesList">
    <li id="TeamsConversationDataMessage1">
      <img id="TeamsConversationDataMessagePhoto1" src="./Assets/Logos/memoji2.webp"></img>
      <div id="TeamsConversationDataMessageData1">
        <span id="TeamsConversationDataMessageData1Author">Kilian</span>
        <span>Salut, comment ça va ?</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage2">
      <img id="TeamsConversationDataMessagePhoto2" src="./Assets/Logos/profile.webp"></img>
      <div id="TeamsConversationDataMessageData2">
        <span id="TeamsConversationDataMessageData2Author">Périco</span>
        <span>Super !!!! Et toi ?</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage3">
      <img id="TeamsConversationDataMessagePhoto3" src="./Assets/Logos/memoji2.webp"></img>
      <div id="TeamsConversationDataMessageData3">
        <span id="TeamsConversationDataMessageData3Author">Kilian</span>
        <span>Ça va ça va</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage4">
      <img id="TeamsConversationDataMessagePhoto4" src="./Assets/Logos/profile.webp"></img>
      <div id="TeamsConversationDataMessageData4">
        <span id="TeamsConversationDataMessageData4Author">Périco</span>
        <span>Nickel</span>
      </div>
    </li>



  </ul>
  `;

    // TeamsConversationDataMessagesList
    TeamsConversationDataMessagesList = document.getElementById(
      "TeamsConversationDataMessagesList"
    );
    TeamsConversationDataMessagesList.style.height = "0";
    TeamsConversationDataMessagesList.style.margin = "20px";
    TeamsConversationDataMessages.style.backgroundColor =
      "var(--teamsBackgroundColor03)";

    // TeamsConversationDataMessage1
    TeamsConversationDataMessage1 = document.getElementById(
      "TeamsConversationDataMessage1"
    );
    TeamsConversationDataMessage1.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto1
    TeamsConversationDataMessagePhoto1 = document.getElementById(
      "TeamsConversationDataMessagePhoto1"
    );
    TeamsConversationDataMessagePhoto1.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData1
    TeamsConversationDataMessageData1 = document.getElementById(
      "TeamsConversationDataMessageData1"
    );
    TeamsConversationDataMessageData1.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData1Author
    TeamsConversationDataMessageData1Author = document.getElementById(
      "TeamsConversationDataMessageData1Author"
    );
    TeamsConversationDataMessageData1Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage2
    TeamsConversationDataMessage2 = document.getElementById(
      "TeamsConversationDataMessage2"
    );
    TeamsConversationDataMessage2.style.marginLeft = "50%";
    TeamsConversationDataMessage2.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto2
    TeamsConversationDataMessagePhoto2 = document.getElementById(
      "TeamsConversationDataMessagePhoto2"
    );
    TeamsConversationDataMessagePhoto2.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData2
    TeamsConversationDataMessageData2 = document.getElementById(
      "TeamsConversationDataMessageData2"
    );
    TeamsConversationDataMessageData2.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData2Author
    TeamsConversationDataMessageData2Author = document.getElementById(
      "TeamsConversationDataMessageData2Author"
    );
    TeamsConversationDataMessageData2Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage3
    TeamsConversationDataMessage3 = document.getElementById(
      "TeamsConversationDataMessage3"
    );
    TeamsConversationDataMessage3.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto3
    TeamsConversationDataMessagePhoto3 = document.getElementById(
      "TeamsConversationDataMessagePhoto3"
    );
    TeamsConversationDataMessagePhoto3.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData3
    TeamsConversationDataMessageData3 = document.getElementById(
      "TeamsConversationDataMessageData3"
    );
    TeamsConversationDataMessageData3.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData3Author
    TeamsConversationDataMessageData3Author = document.getElementById(
      "TeamsConversationDataMessageData3Author"
    );
    TeamsConversationDataMessageData3Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage4
    TeamsConversationDataMessage4 = document.getElementById(
      "TeamsConversationDataMessage4"
    );
    TeamsConversationDataMessage4.scrollIntoView();
    TeamsConversationDataMessage4.style.marginLeft = "50%";
    TeamsConversationDataMessage4.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto4
    TeamsConversationDataMessagePhoto4 = document.getElementById(
      "TeamsConversationDataMessagePhoto4"
    );
    TeamsConversationDataMessagePhoto4.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData4
    TeamsConversationDataMessageData4 = document.getElementById(
      "TeamsConversationDataMessageData4"
    );
    TeamsConversationDataMessageData4.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData4Author
    TeamsConversationDataMessageData4Author = document.getElementById(
      "TeamsConversationDataMessageData4Author"
    );
    TeamsConversationDataMessageData4Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessages
    TeamsConversationDataMessages = document.getElementsByClassName(
      "TeamsConversationDataMessages"
    );
    for (let i = 0; i < TeamsConversationDataMessages.length; i++) {
      TeamsConversationDataMessages[i].style.display = "flex";
      TeamsConversationDataMessages[i].style.width = "min-content";
      TeamsConversationDataMessages[i].style.marginTop = "30px";
      TeamsConversationDataMessages[i].style.padding = "10px";
      TeamsConversationDataMessages[i].style.borderRadius = "5px";
      TeamsConversationDataMessages[i].style.backgroundColor =
        "var(--teamsElementColor01)";
    }
    // TeamsConversationDataMessagesPhoto
    TeamsConversationDataMessagesPhoto = document.getElementsByClassName(
      "TeamsConversationDataMessagesPhoto"
    );
    for (let i = 0; i < TeamsConversationDataMessagesPhoto.length; i++) {
      TeamsConversationDataMessagesPhoto[i].style.height = "60px";
    }
    // TeamsConversationDataMessagesData
    TeamsConversationDataMessagesData = document.getElementsByClassName(
      "TeamsConversationDataMessagesData"
    );
    for (let i = 0; i < TeamsConversationDataMessagesData.length; i++) {
      TeamsConversationDataMessagesData[i].style.display = "grid";
      TeamsConversationDataMessagesData[i].style.marginLeft = "20px";
      TeamsConversationDataMessagesData[i].style.marginTop = "10px";
      TeamsConversationDataMessagesData[i].style.width = "150px";
    }
    // TeamsConversationDataMessagesDataAuthor
    TeamsConversationDataMessagesDataAuthor = document.getElementsByClassName(
      "TeamsConversationDataMessagesDataAuthor"
    );
    for (let i = 0; i < TeamsConversationDataMessagesDataAuthor.length; i++) {
      TeamsConversationDataMessagesDataAuthor[i].style.fontSize = "1.2em";
      TeamsConversationDataMessagesDataAuthor[i].style.marginBottom = "5px";
    }

    // TeamsConversationDataSend
    TeamsConversationDataSend = document.getElementById(
      "TeamsConversationDataSend"
    );
    TeamsConversationDataSend.style.backgroundColor =
      "var(--teamsBackgroundColor03)";
    TeamsConversationDataSend.innerHTML = `
  <form id="TeamsConversationSendForm">
    <input id="TeamsConversationSendInput" type="text" placeholder="Saisissez un message"></input>
  </form>
  `;
    // TeamsConversationSendForm
    TeamsConversationSendForm = document.getElementById(
      "TeamsConversationSendForm"
    );
    TeamsConversationSendForm.style.display = "flex";
    TeamsConversationSendForm.style.height = "100%";
    TeamsConversationSendForm.addEventListener("submit", (event) =>
      event.preventDefault()
    );
    // TeamsConversationSendInput
    TeamsConversationSendInput = document.getElementById(
      "TeamsConversationSendInput"
    );
    TeamsConversationSendInput.style.margin = "auto";
    TeamsConversationSendInput.style.backgroundColor =
      "var(--teamsElementColor01)";
    TeamsConversationSendInput.style.borderRadius = "5px";
    TeamsConversationSendInput.style.border = "none";
    TeamsConversationSendInput.style.padding = "10px 6px 10px 6px";
    TeamsConversationSendInput.style.width = "70%";
    TeamsConversationSendInput.style.color = "var(--textColor)";
    TeamsWindowResized();
  }
  function TeamsDisplayConversation3() {
    TeamsResetConversations();
    TeamsConversation3.style.backgroundColor = "var(--teamsElementColor01)";

    // ApplicationTeamsPart2
    ApplicationTeamsPart2 = document.getElementById("ApplicationTeamsPart2");
    ApplicationTeamsPart2.style.backgroundColor =
      "var(--teamsBackgroundColor04)";
    ApplicationTeamsPart2.style.display = "grid";
    ApplicationTeamsPart2.style.gridTemplateRows = "50px";
    ApplicationTeamsPart2.innerHTML = `
  <form id="TeamsPart2SearchBarContainer">
    <input type="text" placeholder="Rechercher" id="TeamsPart2SearchBar"></input>
    <img src="./Assets/Logos/profile.webp" id="TeamsPart2Profile"></img>
    </form>
  <div id="TeamsConversationData"></div>
  `;
    // TeamsPart2SearchBarContainer
    TeamsPart2SearchBarContainer = document.getElementById(
      "TeamsPart2SearchBarContainer"
    );
    TeamsPart2SearchBarContainer.style.height = "50px";
    TeamsPart2SearchBarContainer.style.display = "flex";
    TeamsPart2SearchBarContainer.addEventListener("submit", (event) =>
      event.preventDefault()
    );
    // TeamsPart2SearchBar
    TeamsPart2SearchBar = document.getElementById("TeamsPart2SearchBar");
    TeamsPart2SearchBar.style.margin = "auto auto auto 2px";
    TeamsPart2SearchBar.style.backgroundColor = "var(--teamsElementColor01)";
    TeamsPart2SearchBar.style.borderRadius = "5px";
    TeamsPart2SearchBar.style.border = "none";
    TeamsPart2SearchBar.style.padding = "10px 6px 10px 6px";
    TeamsPart2SearchBar.style.width = "70%";
    TeamsPart2SearchBar.style.color = "var(--textColor)";

    // TeamsConversationData
    TeamsConversationData = document.getElementById("TeamsConversationData");
    TeamsConversationData.style.backgroundColor =
      "var(--teamsBackgroundColor03)";
    TeamsConversationData.style.display = "grid";
    TeamsConversationData.style.gridTemplateRows = "50px auto 70px";
    TeamsConversationData.style.height = "100%";
    TeamsConversationData.innerHTML = `
  <h2 id="TeamsConversationDataTitle">Alicia</h2>
  <div id="TeamsConversationDataMessages"></div>
  <div id="TeamsConversationDataSend"></div>
  `;
    // TeamsPart2Profile
    TeamsPart2Profile = document.getElementById("TeamsPart2Profile");
    TeamsPart2Profile.style.height = "35px";
    TeamsPart2Profile.style.width = "35px";
    TeamsPart2Profile.style.cursor = "pointer";
    TeamsPart2Profile.style.borderRadius = "100px";
    TeamsPart2Profile.style.margin = "10px";
    // TeamsConversationDataTitle
    TeamsConversationDataTitle = document.getElementById(
      "TeamsConversationDataTitle"
    );
    TeamsConversationDataTitle.style.margin = "20px 0 0 20px";
    // TeamsConversationDataMessages
    TeamsConversationDataMessages = document.getElementById(
      "TeamsConversationDataMessages"
    );
    TeamsConversationDataMessages.style.overflow = "auto";
    TeamsConversationDataMessages.innerHTML = `
  <ul id="TeamsConversationDataMessagesList">
    <li id="TeamsConversationDataMessage1">
      <img id="TeamsConversationDataMessagePhoto1" src="./Assets/Logos/memoji3.webp"></img>
      <div id="TeamsConversationDataMessageData1">
        <span id="TeamsConversationDataMessageData1Author">Alicia</span>
        <span>Salut, comment ça va ?</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage2">
      <img id="TeamsConversationDataMessagePhoto2" src="./Assets/Logos/profile.webp"></img>
      <div id="TeamsConversationDataMessageData2">
        <span id="TeamsConversationDataMessageData2Author">Périco</span>
        <span>Super !!!! Et toi ?</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage3">
      <img id="TeamsConversationDataMessagePhoto3" src="./Assets/Logos/memoji3.webp"></img>
      <div id="TeamsConversationDataMessageData3">
        <span id="TeamsConversationDataMessageData3Author">Alicia</span>
        <span>Ça va ça va</span>
      </div>
    </li>
    <li id="TeamsConversationDataMessage4">
      <img id="TeamsConversationDataMessagePhoto4" src="./Assets/Logos/profile.webp"></img>
      <div id="TeamsConversationDataMessageData4">
        <span id="TeamsConversationDataMessageData4Author">Périco</span>
        <span>Nickel</span>
      </div>
    </li>



  </ul>
  `;

    // TeamsConversationDataMessagesList
    TeamsConversationDataMessagesList = document.getElementById(
      "TeamsConversationDataMessagesList"
    );
    TeamsConversationDataMessagesList.style.height = "0";
    TeamsConversationDataMessagesList.style.margin = "20px";
    TeamsConversationDataMessages.style.backgroundColor =
      "var(--teamsBackgroundColor03)";

    // TeamsConversationDataMessage1
    TeamsConversationDataMessage1 = document.getElementById(
      "TeamsConversationDataMessage1"
    );
    TeamsConversationDataMessage1.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto1
    TeamsConversationDataMessagePhoto1 = document.getElementById(
      "TeamsConversationDataMessagePhoto1"
    );
    TeamsConversationDataMessagePhoto1.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData1
    TeamsConversationDataMessageData1 = document.getElementById(
      "TeamsConversationDataMessageData1"
    );
    TeamsConversationDataMessageData1.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData1Author
    TeamsConversationDataMessageData1Author = document.getElementById(
      "TeamsConversationDataMessageData1Author"
    );
    TeamsConversationDataMessageData1Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage2
    TeamsConversationDataMessage2 = document.getElementById(
      "TeamsConversationDataMessage2"
    );
    TeamsConversationDataMessage2.style.marginLeft = "50%";
    TeamsConversationDataMessage2.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto2
    TeamsConversationDataMessagePhoto2 = document.getElementById(
      "TeamsConversationDataMessagePhoto2"
    );
    TeamsConversationDataMessagePhoto2.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData2
    TeamsConversationDataMessageData2 = document.getElementById(
      "TeamsConversationDataMessageData2"
    );
    TeamsConversationDataMessageData2.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData2Author
    TeamsConversationDataMessageData2Author = document.getElementById(
      "TeamsConversationDataMessageData2Author"
    );
    TeamsConversationDataMessageData2Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage3
    TeamsConversationDataMessage3 = document.getElementById(
      "TeamsConversationDataMessage3"
    );
    TeamsConversationDataMessage3.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto3
    TeamsConversationDataMessagePhoto3 = document.getElementById(
      "TeamsConversationDataMessagePhoto3"
    );
    TeamsConversationDataMessagePhoto3.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData3
    TeamsConversationDataMessageData3 = document.getElementById(
      "TeamsConversationDataMessageData3"
    );
    TeamsConversationDataMessageData3.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData3Author
    TeamsConversationDataMessageData3Author = document.getElementById(
      "TeamsConversationDataMessageData3Author"
    );
    TeamsConversationDataMessageData3Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessage4
    TeamsConversationDataMessage4 = document.getElementById(
      "TeamsConversationDataMessage4"
    );
    TeamsConversationDataMessage4.scrollIntoView();
    TeamsConversationDataMessage4.style.marginLeft = "50%";
    TeamsConversationDataMessage4.classList.add(
      "TeamsConversationDataMessages"
    );
    // TeamsConversationDataMessagePhoto4
    TeamsConversationDataMessagePhoto4 = document.getElementById(
      "TeamsConversationDataMessagePhoto4"
    );
    TeamsConversationDataMessagePhoto4.classList.add(
      "TeamsConversationDataMessagesPhoto"
    );
    // TeamsConversationDataMessageData4
    TeamsConversationDataMessageData4 = document.getElementById(
      "TeamsConversationDataMessageData4"
    );
    TeamsConversationDataMessageData4.classList.add(
      "TeamsConversationDataMessagesData"
    );
    // TeamsConversationDataMessageData4Author
    TeamsConversationDataMessageData4Author = document.getElementById(
      "TeamsConversationDataMessageData4Author"
    );
    TeamsConversationDataMessageData4Author.classList.add(
      "TeamsConversationDataMessagesDataAuthor"
    );

    // TeamsConversationDataMessages
    TeamsConversationDataMessages = document.getElementsByClassName(
      "TeamsConversationDataMessages"
    );
    for (let i = 0; i < TeamsConversationDataMessages.length; i++) {
      TeamsConversationDataMessages[i].style.display = "flex";
      TeamsConversationDataMessages[i].style.width = "min-content";
      TeamsConversationDataMessages[i].style.marginTop = "30px";
      TeamsConversationDataMessages[i].style.padding = "10px";
      TeamsConversationDataMessages[i].style.borderRadius = "5px";
      TeamsConversationDataMessages[i].style.backgroundColor =
        "var(--teamsElementColor01)";
    }
    // TeamsConversationDataMessagesPhoto
    TeamsConversationDataMessagesPhoto = document.getElementsByClassName(
      "TeamsConversationDataMessagesPhoto"
    );
    for (let i = 0; i < TeamsConversationDataMessagesPhoto.length; i++) {
      TeamsConversationDataMessagesPhoto[i].style.height = "60px";
    }
    // TeamsConversationDataMessagesData
    TeamsConversationDataMessagesData = document.getElementsByClassName(
      "TeamsConversationDataMessagesData"
    );
    for (let i = 0; i < TeamsConversationDataMessagesData.length; i++) {
      TeamsConversationDataMessagesData[i].style.display = "grid";
      TeamsConversationDataMessagesData[i].style.marginLeft = "20px";
      TeamsConversationDataMessagesData[i].style.marginTop = "10px";
      TeamsConversationDataMessagesData[i].style.width = "150px";
    }
    // TeamsConversationDataMessagesDataAuthor
    TeamsConversationDataMessagesDataAuthor = document.getElementsByClassName(
      "TeamsConversationDataMessagesDataAuthor"
    );
    for (let i = 0; i < TeamsConversationDataMessagesDataAuthor.length; i++) {
      TeamsConversationDataMessagesDataAuthor[i].style.fontSize = "1.2em";
      TeamsConversationDataMessagesDataAuthor[i].style.marginBottom = "5px";
    }

    // TeamsConversationDataSend
    TeamsConversationDataSend = document.getElementById(
      "TeamsConversationDataSend"
    );
    TeamsConversationDataSend.style.backgroundColor =
      "var(--teamsBackgroundColor03)";
    TeamsConversationDataSend.innerHTML = `
  <form id="TeamsConversationSendForm">
    <input id="TeamsConversationSendInput" type="text" placeholder="Saisissez un message"></input>
  </form>
  `;

    // TeamsConversationSendForm
    TeamsConversationSendForm = document.getElementById(
      "TeamsConversationSendForm"
    );
    TeamsConversationSendForm.style.display = "flex";
    TeamsConversationSendForm.style.height = "100%";
    TeamsConversationSendForm.addEventListener("submit", (event) =>
      event.preventDefault()
    );
    // TeamsConversationSendInput
    TeamsConversationSendInput = document.getElementById(
      "TeamsConversationSendInput"
    );
    TeamsConversationSendInput.style.margin = "auto";
    TeamsConversationSendInput.style.backgroundColor =
      "var(--teamsElementColor01)";
    TeamsConversationSendInput.style.borderRadius = "5px";
    TeamsConversationSendInput.style.border = "none";
    TeamsConversationSendInput.style.padding = "10px 6px 10px 6px";
    TeamsConversationSendInput.style.width = "70%";
    TeamsConversationSendInput.style.color = "var(--textColor)";
    TeamsWindowResized();
  }
  function TeamsResetConversations() {
    for (let i = 0; i < TeamsConversations.length; i++) {
      TeamsConversations[i].style.backgroundColor = "transparent";
    }
  }

  TeamsWindowResized();
  addEventListener("resize", TeamsWindowResized);

  function TeamsWindowResized() {
    if (window.innerWidth <= 1500) {
      for (let i = 0; i < TeamsMenuBarElementsTitle.length; i++) {
        TeamsMenuBarElementsTitle[i].style.position = "absolute";
        TeamsMenuBarElementsTitle[i].style.fontSize = "0";
      }
    } else {
      for (let i = 0; i < TeamsMenuBarElementsTitle.length; i++) {
        TeamsMenuBarElementsTitle[i].style.removeProperty("position");
        TeamsMenuBarElementsTitle[i].style.fontSize = "1.2em";
      }
    }

    if (window.innerWidth <= 1400) {
      TeamsConversationListTitle.style.position = "absolute";
      TeamsConversationListTitle.style.fontSize = "0";
      TeamsConversationsL.style.margin = "5px";
      ApplicationTeamsParts.style.gridTemplateColumns = "140px auto";
      for (let i = 0; i < TeamsConversationsTitles.length; i++) {
        TeamsConversationsTitles[i].style.position = "absolute";
        TeamsConversationsTitles[i].style.fontSize = "0";
      }
      for (let i = 0; i < TeamsConversations.length; i++) {
        TeamsConversations[i].style.padding = "5px";
      }
    } else {
      TeamsConversationListTitle.style.removeProperty("position");
      TeamsConversationListTitle.style.fontSize = "1.5em";
      TeamsConversationsL.style.margin = "20px";
      ApplicationTeamsParts.style.gridTemplateColumns = "1fr 1.5fr";
      for (let i = 0; i < TeamsMenuBarElementsTitle.length; i++) {
        TeamsConversationsTitles[i].style.removeProperty("position");
        TeamsConversationsTitles[i].style.fontSize = "1.2em";
      }
      for (let i = 0; i < TeamsConversations.length; i++) {
        TeamsConversations[i].style.padding = "20px";
      }
    }

    if (window.innerWidth <= 1120) {
      ApplicationTeamsParts.style.gridTemplateColumns = "1fr";
      ApplicationTeamsParts.style.gridTemplateRows = "140px auto";
      TeamsMenuBarList.style.display = "flex";
      TeamsConversationsL.style.display = "flex";
      TeamsMenuBarList.style.marginTop = "0";
      TeamsMenuBar.style.margin = "0";
      TeamsConversationsList.style.marginTop = "10px";
      ApplicationTeamsPart1.style.gridTemplateColumns = "1fr";
      ApplicationTeamsPart2.style.gridTemplateRows = "0px auto";
      TeamsPart2SearchBar.disabled = true;
      TeamsPart2SearchBar.style.opacity = "0";
      TeamsConversationDataMessage2.style.marginLeft = "10%";
      TeamsConversationDataMessage4.style.marginLeft = "10%";
      for (let i = 0; i < TeamsMenuBarElementsLogo.length; i++) {
        TeamsMenuBarElementsLogo[i].style.height = "30px";
      }
      for (let i = 0; i < TeamsConversationProfile.length; i++) {
        TeamsConversationProfile[i].style.height = "40px";
      }
    } else {
      ApplicationTeamsParts.style.gridTemplateRows = "1fr";
      TeamsMenuBarList.style.removeProperty("display");
      TeamsConversationsL.style.removeProperty("display");
      TeamsMenuBarList.style.marginTop = "40px";
      TeamsMenuBar.style.margin = "50px auto auto auto";
      TeamsConversationsList.style.marginTop = "50px";
      ApplicationTeamsPart2.style.gridTemplateRows = "50px";
      TeamsPart2SearchBar.disabled = false;
      TeamsPart2SearchBar.style.opacity = "1";
      TeamsConversationDataMessage2.style.marginLeft = "50%";
      TeamsConversationDataMessage4.style.marginLeft = "50%";
      ApplicationTeamsPart1.style.gridTemplateColumns = "0.8fr 3fr";
      for (let i = 0; i < TeamsMenuBarElementsLogo.length; i++) {
        TeamsMenuBarElementsLogo[i].style.height = "50px";
      }
      for (let i = 0; i < TeamsConversationProfile.length; i++) {
        TeamsConversationProfile[i].style.height = "50px";
      }
    }
  }
}
function LaunchTerminalApp() {
  LaunchApplication("50%", "50%", "40%", "50%", "Terminal");

  Application.innerHTML = `
  <div id="ApplicationTerminalParts">
    <div id="ApplicationTerminalPart1"></div>
    <div id="ApplicationTerminalPart2"></div>
  </div>
  `;

  // ApplicationTerminalParts
  ApplicationTerminalParts = document.getElementById(
    "ApplicationTerminalParts"
  );
  ApplicationTerminalParts.style.height = "100%";
  ApplicationTerminalParts.style.display = "grid";
  ApplicationTerminalParts.style.gridTemplateColumns = "1fr 2.5fr";
  // ApplicationTerminalPart1
  ApplicationTerminalPart1 = document.getElementById(
    "ApplicationTerminalPart1"
  );
  ApplicationTerminalPart1.style.overflow = "auto";
  ApplicationTerminalPart1.style.backgroundColor =
    "var(--windowBackgroundColor05)";
  ApplicationTerminalPart1.innerHTML = `
    <h1>Terminal</h1>
    <ul id="TerminalPart1List">
      <li id="TerminalPart1Debian">debian@142.250.74.227</li>
      <li id="TerminalPart1Ubuntu">ubuntu@193.252.117.145</li>
      <li id="TerminalPart1Root">root@13.69.68.14</li>
      <li id="TerminalPart1User0">user0@109.234.164.9</li>
    </ul>
    `;
  // TerminalPart1List
  TerminalPart1List = document.getElementById("TerminalPart1List");
  // TerminalPart1Debian
  TerminalPart1Debian = document.getElementById("TerminalPart1Debian");
  TerminalPart1Debian.classList.add("TerminalPart1Conn");
  TerminalPart1Debian.addEventListener("click", TerminalDisplayDebian);
  // TerminalPart1Ubuntu
  TerminalPart1Ubuntu = document.getElementById("TerminalPart1Ubuntu");
  TerminalPart1Ubuntu.classList.add("TerminalPart1Conn");
  TerminalPart1Ubuntu.addEventListener("click", TerminalDisplayUbuntu);
  // TerminalPart1Root
  TerminalPart1Root = document.getElementById("TerminalPart1Root");
  TerminalPart1Root.classList.add("TerminalPart1Conn");
  TerminalPart1Root.addEventListener("click", TerminalDisplayRoot);
  // TerminalPart1User0
  TerminalPart1User0 = document.getElementById("TerminalPart1User0");
  TerminalPart1User0.classList.add("TerminalPart1Conn");
  TerminalPart1User0.addEventListener("click", TerminalDisplayUser0);
  // TerminalPart1Conn
  TerminalPart1Conn = document.getElementsByClassName("TerminalPart1Conn");
  for (let i = 0; i < TerminalPart1Conn.length; i++) {
    TerminalPart1Conn[i].style.color = "var(--textColor)";
    TerminalPart1Conn[i].style.fontSize = "1.2em";
    TerminalPart1Conn[i].style.padding = "20px";
    TerminalPart1Conn[i].style.cursor = "pointer";
    TerminalPart1Conn[i].style.userSelect = "none";
  }
  //ApplicationTerminalPart2
  ApplicationTerminalPart2 = document.getElementById(
    "ApplicationTerminalPart2"
  );
  ApplicationTerminalPart2.style.overflow = "auto";
  ApplicationTerminalPart2.style.backgroundColor =
    "var(--windowBackgroundColor04)";
  TerminalDisplayDebian(); // Display by default
  function TerminalDisplayDebian() {
    TerminalResetConn();
    TerminalPart1Debian.style.backgroundColor = "var(--buttonColor01)";
    ApplicationTerminalPart2.innerHTML = `
    <div id="CodeContainer">
      <p>debian@142.250.74.227:/home/debian/personal$ </p>
    </div>
    `;
    // CodeContainer
    CodeContainer = document.getElementById("CodeContainer");
    CodeContainer.style.margin = "40px";
    CodeContainer.style.color = "var(--textColor)";
  }
  function TerminalDisplayUbuntu() {
    TerminalResetConn();
    TerminalPart1Ubuntu.style.backgroundColor = "var(--buttonColor01)";
    ApplicationTerminalPart2.innerHTML = `
    <div id="CodeContainer">
      <p>ubuntu@193.252.117.145:~$ </p>
    </div>
    `;
    // CodeContainer
    CodeContainer = document.getElementById("CodeContainer");
    CodeContainer.style.margin = "40px";
    CodeContainer.style.color = "var(--textColor)";
  }
  function TerminalDisplayRoot() {
    TerminalResetConn();
    TerminalPart1Root.style.backgroundColor = "var(--buttonColor01)";
    ApplicationTerminalPart2.innerHTML = `
    <div id="CodeContainer">
      <p>root@13.69.68.14:/var/www/html/$ </p>
    </div>
    `;
    // CodeContainer
    CodeContainer = document.getElementById("CodeContainer");
    CodeContainer.style.margin = "40px";
    CodeContainer.style.color = "var(--textColor)";
  }
  function TerminalDisplayUser0() {
    TerminalResetConn();
    TerminalPart1User0.style.backgroundColor = "var(--buttonColor01)";
    ApplicationTerminalPart2.innerHTML = `
    <div id="CodeContainer">
      <p>user0@109.234.164.9:/usr/bin$ </p>
    </div>
    `;
    // CodeContainer
    CodeContainer = document.getElementById("CodeContainer");
    CodeContainer.style.margin = "40px";
    CodeContainer.style.color = "var(--textColor)";
  }

  function TerminalResetConn() {
    for (let i = 0; i < TerminalPart1Conn.length; i++) {
      TerminalPart1Conn[i].style.backgroundColor = "transparent";
    }
  }

  H1 = document.getElementsByTagName("H1")[0];
  H1.style.color = "var(--textColor)";
  H1.style.margin = "30px";
  H1.style.userSelect = "none";

  TerminalWindowResized();
  addEventListener("resize", TerminalWindowResized);

  function TerminalWindowResized() {
    if (window.innerWidth <= 800) {
      ApplicationTerminalParts.style.gridTemplateColumns = "1fr";
      ApplicationTerminalParts.style.gridTemplateRows = "80px auto";
      TerminalPart1List.style.display = "flex";
      H1.innerHTML = "";
      H1.style.margin = "0";

      CodeContainer.style.margin = "10px";
    } else {
      ApplicationTerminalParts.style.gridTemplateRows = "1fr ";
      ApplicationTerminalParts.style.gridTemplateColumns = "1fr 2.5fr";
    }
  }
}
function LaunchVscodeApp() {
  LaunchApplication("50%", "50%", "50%", "50%", "Visual Studio Code");
  Application.innerHTML = `
  <div id="ApplicationVscodeParts">
    <div id="ApplicationVscodePart1"></div>
    <div id="ApplicationVscodePart2"></div>
  </div>
  `;
  // ApplicationVscodeParts
  ApplicationVscodeParts = document.getElementById("ApplicationVscodeParts");
  ApplicationVscodeParts.style.height = "100%";
  ApplicationVscodeParts.style.display = "grid";
  ApplicationVscodeParts.style.gridTemplateColumns = "50px auto";
  // ApplicationVscodePart1
  ApplicationVscodePart1 = document.getElementById("ApplicationVscodePart1");
  ApplicationVscodePart1.style.display = "flex";
  ApplicationVscodePart1.style.userSelect = "none";
  ApplicationVscodePart1.style.flexDirection = "column";
  ApplicationVscodePart1.style.backgroundColor =
    "var(--windowBackgroundColor01)";
  ApplicationVscodePart1.innerHTML = `
    <img id="ApplicationVscodePart1Icon1" src="./Assets/Vscode/document-dark.svg"></img>
    <img id="ApplicationVscodePart1Icon2" src="./Assets/Vscode/folder-dark.svg"></img>
    `;

  // ApplicationVscodePart1Icon1
  ApplicationVscodePart1Icon1 = document.getElementById(
    "ApplicationVscodePart1Icon1"
  );
  ApplicationVscodePart1Icon1.style.backgroundColor =
    "var(--systemElementColor01)";
  ApplicationVscodePart1Icon1.classList.add("ApplicationVscodePart1Icons");

  // ApplicationVscodePart1Icon2
  ApplicationVscodePart1Icon2 = document.getElementById(
    "ApplicationVscodePart1Icon2"
  );
  ApplicationVscodePart1Icon2.classList.add("ApplicationVscodePart1Icons");
  // ApplicationVscodePart1Icons
  ApplicationVscodePart1Icons = document.getElementsByClassName(
    "ApplicationVscodePart1Icons"
  );
  for (let i = 0; i < ApplicationVscodePart1Icons.length; i++) {
    ApplicationVscodePart1Icons[i].style.cursor = "pointer";
    ApplicationVscodePart1Icons[i].style.height = "35px";
    ApplicationVscodePart1Icons[i].style.margin = "0 auto 0 auto";
    ApplicationVscodePart1Icons[i].style.padding = "10px";
  }

  //ApplicationVscodePart2
  ApplicationVscodePart2 = document.getElementById("ApplicationVscodePart2");
  ApplicationVscodePart2.style.backgroundColor =
    "var(--windowBackgroundColor01)";
  ApplicationVscodePart2.style.display = "grid";
  ApplicationVscodePart2.style.gridTemplateRows = "30px auto";
  ApplicationVscodePart2.style.overflow = "auto";
  ApplicationVscodePart2.innerHTML = `
    <div id="VsCodeTab"></div>
    <div id="VsCodeCodeContainer"></div>
    `;
  // VsCodeTab
  VsCodeTab = document.getElementById("VsCodeTab");
  VsCodeTab.style.backgroundColor = "var(--teamsBackgroundColor03)";
  VsCodeTab.style.marginTop = "2px";
  VsCodeTab.innerHTML = `
  <svg id="VsCodeTabLogo" fill="none" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>
  <p id="VsCodeTabTitle">index.html</p>
  `;
  VsCodeTab.style.display = "flex";
  VsCodeTab.style.width = "150px";
  VsCodeTab.style.userSelect = "none";
  // VsCodeTabLogo
  VsCodeTabLogo = document.getElementById("VsCodeTabLogo");
  VsCodeTabLogo.style.margin = "auto 0 auto 10px";
  VsCodeTabLogo.style.height = "20px";
  // VsCodeTabTitle
  VsCodeTabTitle = document.getElementById("VsCodeTabTitle");
  VsCodeTabTitle.style.color = "var(--textColor)";
  VsCodeTabTitle.style.fontSize = "1em";
  VsCodeTabTitle.style.margin = "auto auto auto 10px";
  // VsCodeCodeContainer
  VsCodeCodeContainer = document.getElementById("VsCodeCodeContainer");
  VsCodeCodeContainer.style.backgroundColor = "var(--teamsBackgroundColor03)";
  VsCodeCodeContainer.innerHTML = `
  <div id="VsCodeCodeContainerContainerList">
    <div id="VsCodeCodeContainerContainer1">
      <h1>Le Développement</h1>
      <p>
        Mon domaine principal est peut-être le monde des routeurs et de switchs
        mais j'ai aussi un gros intérêt pour le <strong>Développement</strong>. Le
        fait de pouvoir réaliser concrètement un site, une application comme on le
        veux que ça soit esthétiquement et dans le fonctionnement.
      </p>
      <p>
        La programmation me sert aussi dans mon travail. Par exemple pour
        automatiser une action. Je suis loin de connaitre toutes les possibilités
        de tous les langages, mais le peux que je connais me permet de réaliser ce
        dont j'ai besoin
      </p>
    </div>
    <div id="VsCodeCodeContainerContainer2">
      <h2>Les Langages</h2>
      <p>Voici la liste des langages avec lesquels je m'amuse :</p>
      <div id="VsCodeContainerLangsList">
        <div>
          <img id="VsCodeContainerLang1Logo" src="./Assets/Vscode/javascript-1.svg" />
          <span>JavaScript</span>
        </div>
        <div>
          <img id="VsCodeContainerLang2Logo" src="./Assets/Vscode/html-1.svg" />
          <span>HTML (Balisage)</span>
        </div>
        <div>
          <img id="VsCodeContainerLang3Logo" src="./Assets/Vscode/css-3.svg" />
          <span>CSS (Style)</span>
        </div>
        <div>
          <img id="VsCodeContainerLang4Logo" src="./Assets/Vscode/c--4.svg" />
          <span>C# (CSharp)</span>
        </div>
        <div>
          <img id="VsCodeContainerLang5Logo" src="./Assets/Vscode/rust.svg" />
          <span>Rust</span>
        </div>
        <div>
        <img id="VsCodeContainerLang6Logo" src="./Assets/Vscode/python-5.svg" />
        <span>Python</span>
      </div>
    </div>
  </div>
  `;
  // VsCodeCodeContainerContainerList
  VsCodeCodeContainerContainerList = document.getElementById(
    "VsCodeCodeContainerContainerList"
  );
  VsCodeCodeContainerContainerList.style.margin = "20px";
  VsCodeCodeContainerContainerList.style.color = "var(--textColor)";
  // VsCodeCodeContainerContainer1
  VsCodeCodeContainerContainer1 = document.getElementById(
    "VsCodeCodeContainerContainer1"
  );
  // VsCodeContainerLangsList
  VsCodeContainerLangsList = document.getElementById(
    "VsCodeContainerLangsList"
  );
  VsCodeContainerLangsList.style.display = "flex";
  // VsCodeContainerLang1Logo
  VsCodeContainerLang1Logo = document.getElementById(
    "VsCodeContainerLang1Logo"
  );
  VsCodeContainerLang1Logo.classList.add("VsCodeContainerLangsLogo");
  // VsCodeContainerLang2Logo
  VsCodeContainerLang2Logo = document.getElementById(
    "VsCodeContainerLang2Logo"
  );
  VsCodeContainerLang2Logo.classList.add("VsCodeContainerLangsLogo");
  // VsCodeContainerLang3Logo
  VsCodeContainerLang3Logo = document.getElementById(
    "VsCodeContainerLang3Logo"
  );
  VsCodeContainerLang3Logo.classList.add("VsCodeContainerLangsLogo");
  // VsCodeContainerLang4Logo
  VsCodeContainerLang4Logo = document.getElementById(
    "VsCodeContainerLang4Logo"
  );
  VsCodeContainerLang4Logo.classList.add("VsCodeContainerLangsLogo");
  // VsCodeContainerLang5Logo
  VsCodeContainerLang5Logo = document.getElementById(
    "VsCodeContainerLang5Logo"
  );
  VsCodeContainerLang5Logo.classList.add("VsCodeContainerLangsLogo");
  // VsCodeContainerLang6Logo
  VsCodeContainerLang6Logo = document.getElementById(
    "VsCodeContainerLang6Logo"
  );
  VsCodeContainerLang6Logo.classList.add("VsCodeContainerLangsLogo");
  // VsCodeContainerLangsLogo
  VsCodeContainerLangsLogo = document.getElementsByClassName(
    "VsCodeContainerLangsLogo"
  );
  for (let i = 0; i < VsCodeContainerLangsLogo.length; i++) {
    VsCodeContainerLangsLogo[i].style.height = "50px";
  }
}
function LaunchSettingsApp() {
  CloseStatusBarContextualMenu();
  LaunchApplication("45%", "30%", "60%", "50%", "Réglages Système");
  Application.innerHTML = `
  <div id="ApplicationSettingsParts">
    <div id="ApplicationSettingsPart1"></div>
    <div id="ApplicationSettingsPart2"></div>
  </div>
  `;
  // ApplicationSettingsParts
  ApplicationSettingsParts = document.getElementById(
    "ApplicationSettingsParts"
  );
  ApplicationSettingsParts.style.height = "100%";
  ApplicationSettingsParts.style.display = "grid";
  ApplicationSettingsParts.style.gridTemplateColumns = "1fr 2.5fr";
  // ApplicationSettingsPart1
  ApplicationSettingsPart1 = document.getElementById(
    "ApplicationSettingsPart1"
  );
  ApplicationSettingsPart1.style.backdropFilter = "blur(10px)";
  ApplicationSettingsPart1.style.overflowX = "auto";
  ApplicationSettingsPart1.style.backgroundColor =
    "var(--windowBackgroundColor02)";
  ApplicationSettingsPart1.innerHTML = `
    <h1>Réglages Système</h1>
      <ul id="SettingsPart1List">
        <li id="SettingsGeneral">
          <img id="SettingsGeneralLogo" src="./Assets/Settings/Icons/SettingsGeneral.webp"></img>
          <span id='SettingsGeneralTitle'>Général</span>
        </li>
          <li id="SettingsApparency">
          <img id="SettingsApparencyLogo" src="./Assets/Settings/Icons/SettingsApparency.webp"></img>
            <span id='SettingsApparencyTitle'>Apparence</span>
          </li>
        <li id="SettingsBackground">
          <img id="SettingsBackgroundLogo" src="./Assets/Settings/Icons/SettingsBackground.webp"></img>
          <span id='SettingsBackgroundTitle'>Fond d'écran</span>
        </li>
      <ul>
    `;
  // h1
  // SettingsPart1List
  SettingsPart1List = document.getElementById("SettingsPart1List");
  // SettingsGeneral
  SettingsGeneral = document.getElementById("SettingsGeneral");
  SettingsGeneral.classList.add("SettingsMenus");
  SettingsGeneral.addEventListener("click", DisplaySettingsGeneral);
  // SettingsGeneralLogo
  SettingsGeneralLogo = document.getElementById("SettingsGeneralLogo");
  SettingsGeneralLogo.classList.add("SettingsMenusLogo");
  // SettingsGeneralTitle
  SettingsGeneralTitle = document.getElementById("SettingsGeneralTitle");
  SettingsGeneralTitle.classList.add("SettingsMenusTitle");

  // SettingsApparency
  SettingsApparency = document.getElementById("SettingsApparency");
  SettingsApparency.classList.add("SettingsMenus");
  SettingsApparency.addEventListener("click", DisplaySettingsApparency);
  // SettingsApparencyLogo
  SettingsApparencyLogo = document.getElementById("SettingsApparencyLogo");
  SettingsApparencyLogo.classList.add("SettingsMenusLogo");
  // SettingsApparencyTitle
  SettingsApparencyTitle = document.getElementById("SettingsApparencyTitle");
  SettingsApparencyTitle.classList.add("SettingsMenusTitle");

  // SettingsBackground
  SettingsBackground = document.getElementById("SettingsBackground");
  SettingsBackground.classList.add("SettingsMenus");
  SettingsBackground.addEventListener("click", DisplaySettingsBackground);
  // SettingsBackgroundLogo
  SettingsBackgroundLogo = document.getElementById("SettingsBackgroundLogo");
  SettingsBackgroundLogo.classList.add("SettingsMenusLogo");
  // SettingsBackgroundTitle
  SettingsBackgroundTitle = document.getElementById("SettingsBackgroundTitle");
  SettingsBackgroundTitle.classList.add("SettingsMenusTitle");

  // SettingsMenus
  SettingsMenus = document.getElementsByClassName("SettingsMenus");
  for (let i = 0; i < SettingsMenus.length; i++) {
    SettingsMenus[i].style.display = "flex";
    SettingsMenus[i].style.userSelect = "none";
    SettingsMenus[i].style.cursor = "pointer";
    SettingsMenus[i].style.margin = "5px 10px 5px 10px";
    SettingsMenus[i].style.padding = "5px 10px 5px 10px";
    SettingsMenus[i].style.borderRadius = "5px";
    SettingsMenus[i].style.transition = "50ms";
  }
  // SettingsMenusLogo
  SettingsMenusLogo = document.getElementsByClassName("SettingsMenusLogo");
  for (let i = 0; i < SettingsMenusLogo.length; i++) {
    SettingsMenusLogo[i].style.height = "30px";
    SettingsMenusLogo[i].style.marginLeft = "10px";
    SettingsMenusLogo[i].style.fill = "var(--elementBackgroundColor03)";
  }
  // SettingsMenusTitle
  SettingsMenusTitle = document.getElementsByClassName("SettingsMenusTitle");
  for (let i = 0; i < SettingsMenusTitle.length; i++) {
    SettingsMenusTitle[i].style.color = "var(--textColor)";
    SettingsMenusTitle[i].style.marginTop = "auto";
    SettingsMenusTitle[i].style.marginLeft = "10px";
    SettingsMenusTitle[i].style.marginBottom = "auto";
  }

  function DisplaySettingsGeneral() {
    HideSettingsMenusBackgrounds();
    // SettingsGeneral
    SettingsGeneral.style.backgroundColor = "var(--buttonColor02)";
    ApplicationSettingsPart2.style.overflowX = "auto";
    ApplicationSettingsPart2.innerHTML = `
    <div id=SettingsGeneralPart></div>
    `;
    // SettingsGeneralList
    SettingsGeneralPart = document.getElementById("SettingsGeneralPart");
    SettingsGeneralPart.style.margin = "40px";
    SettingsGeneralPart.innerHTML = `
    <h2 id="SettingsGeneralListTitle">Général</h2>
    <ul id="SettingsGeneralList1">
      <li id="SettingsGeneralInformation">
        <img id="SettingsGeneralInformationLogo" src="./Assets/Settings/Icons/SettingsGeneralInfo.webp"></img>
        <span id="SettingsGeneralInformationTitle">Informations</span>
      </li>
      <li id="SettingsGeneralUpdates">
        <img id="SettingsGeneralUpdatesLogo" src="./Assets/Settings/Icons/SettingsGeneralUpdates.webp"></img>
        <span id="SettingsGeneralUpdatesTitle">Mise à jour de logiciels</span>
      </li>
      <li id="SettingsGeneralStorage">
        <img id="SettingsGeneralStorageLogo" src="./Assets/Settings/Icons/SettingsGeneralStorage.webp"></img>
        <span id="SettingsGeneralStorageTitle">Stockage</span>
      </li>
    </ul>

    <ul id="SettingsGeneralList2">
      <li id="SettingsGeneralLanguages">
        <img id="SettingsGeneralLanguagesLogo" src="./Assets/Settings/Icons/SettingsGeneralLanguages.webp"></img>
        <span id="SettingsGeneralLanguagesTitle">Langue et région</span>
      </li>
      <li id="SettingsGeneralDateTime">
        <img id="SettingsGeneralDateTimeLogo" src="./Assets/Settings/Icons/SettingsGeneralDateTime.webp"></img>
        <span id="SettingsGeneralDateTimeTitle">Date et heure</span>
      </li>

    </ul>

    <ul id="SettingsGeneralList3">
      <li id="SettingsGeneralShare">
        <img id="SettingsGeneralShareLogo" src="./Assets/Settings/Icons/SettingsGeneralShare.webp"></img>
        <span id="SettingsGeneralShareTitle">Partage</span>
      </li>
      <li id="SettingsGeneralReset">
        <img id="SettingsGeneralResetLogo" src="./Assets/Settings/Icons/SettingsGeneralReset.webp"></img>
        <span id="SettingsGeneralResetTitle">Trandférer ou réinitialiser</span>
      </li>
    </ul>
    `;
    // SettingsGeneralListTitle
    SettingsGeneralListTitle = document.getElementById(
      "SettingsGeneralListTitle"
    );
    SettingsGeneralListTitle.style.color = "var(--textColor)";
    SettingsGeneralListTitle.style.userSelect = "none";
    // SettingsGeneralList1
    SettingsGeneralList1 = document.getElementById("SettingsGeneralList1");
    SettingsGeneralList1.classList.add("SettingsGeneralListMenus");
    // SettingsGeneralList2
    SettingsGeneralList2 = document.getElementById("SettingsGeneralList2");
    SettingsGeneralList2.classList.add("SettingsGeneralListMenus");
    // SettingsGeneralList3
    SettingsGeneralList3 = document.getElementById("SettingsGeneralList3");
    SettingsGeneralList3.classList.add("SettingsGeneralListMenus");
    // SettingsGeneralInformation
    SettingsGeneralInformation = document.getElementById(
      "SettingsGeneralInformation"
    );
    SettingsGeneralInformation.classList.add("SettingsGeneralMenus");
    // SettingsGeneralInformationLogo
    SettingsGeneralInformationLogo = document.getElementById(
      "SettingsGeneralInformationLogo"
    );
    SettingsGeneralInformationLogo.classList.add("SettingsGeneralMenusLogo");
    // SettingsGeneralInformationTitle
    SettingsGeneralInformationTitle = document.getElementById(
      "SettingsGeneralInformationTitle"
    );
    SettingsGeneralInformationTitle.classList.add("SettingsGeneralMenusTitle");

    // SettingsGeneralUpdates
    SettingsGeneralUpdates = document.getElementById("SettingsGeneralUpdates");
    SettingsGeneralUpdates.classList.add("SettingsGeneralMenus");
    // SettingsGeneralUpdatesLogo
    SettingsGeneralUpdatesLogo = document.getElementById(
      "SettingsGeneralUpdatesLogo"
    );
    SettingsGeneralUpdatesLogo.classList.add("SettingsGeneralMenusLogo");
    // SettingsGeneralUpdatesTitle
    SettingsGeneralUpdatesTitle = document.getElementById(
      "SettingsGeneralUpdatesTitle"
    );
    SettingsGeneralUpdatesTitle.classList.add("SettingsGeneralMenusTitle");

    // SettingsGeneralStorage
    SettingsGeneralStorage = document.getElementById("SettingsGeneralStorage");
    SettingsGeneralStorage.classList.add("SettingsGeneralMenus");
    // SettingsGeneralStorageLogo
    SettingsGeneralStorageLogo = document.getElementById(
      "SettingsGeneralStorageLogo"
    );
    SettingsGeneralStorageLogo.classList.add("SettingsGeneralMenusLogo");
    // SettingsGeneralStorageTitle
    SettingsGeneralStorageTitle = document.getElementById(
      "SettingsGeneralStorageTitle"
    );
    SettingsGeneralStorageTitle.classList.add("SettingsGeneralMenusTitle");

    // SettingsGeneralDateTime
    SettingsGeneralDateTime = document.getElementById(
      "SettingsGeneralDateTime"
    );
    SettingsGeneralDateTime.classList.add("SettingsGeneralMenus");
    // SettingsGeneralDateTimeLogo
    SettingsGeneralDateTimeLogo = document.getElementById(
      "SettingsGeneralDateTimeLogo"
    );
    SettingsGeneralDateTimeLogo.classList.add("SettingsGeneralMenusLogo");
    // SettingsGeneralDateTimeTitle
    SettingsGeneralDateTimeTitle = document.getElementById(
      "SettingsGeneralDateTimeTitle"
    );
    SettingsGeneralDateTimeTitle.classList.add("SettingsGeneralMenusTitle");

    // SettingsGeneralLanguages
    SettingsGeneralLanguages = document.getElementById(
      "SettingsGeneralLanguages"
    );
    SettingsGeneralLanguages.classList.add("SettingsGeneralMenus");
    // SettingsGeneralLanguagesLogo
    SettingsGeneralLanguagesLogo = document.getElementById(
      "SettingsGeneralLanguagesLogo"
    );
    SettingsGeneralLanguagesLogo.classList.add("SettingsGeneralMenusLogo");
    // SettingsGeneralLanguagesTitle
    SettingsGeneralLanguagesTitle = document.getElementById(
      "SettingsGeneralLanguagesTitle"
    );
    SettingsGeneralLanguagesTitle.classList.add("SettingsGeneralMenusTitle");

    // SettingsGeneralShare
    SettingsGeneralShare = document.getElementById("SettingsGeneralShare");
    SettingsGeneralShare.classList.add("SettingsGeneralMenus");
    // SettingsGeneralShareLogo
    SettingsGeneralShareLogo = document.getElementById(
      "SettingsGeneralShareLogo"
    );
    SettingsGeneralShareLogo.classList.add("SettingsGeneralMenusLogo");
    // SettingsGeneralShareTitle
    SettingsGeneralShareTitle = document.getElementById(
      "SettingsGeneralShareTitle"
    );
    SettingsGeneralShareTitle.classList.add("SettingsGeneralMenusTitle");

    // SettingsGeneralReset
    SettingsGeneralReset = document.getElementById("SettingsGeneralReset");
    SettingsGeneralReset.classList.add("SettingsGeneralMenus");
    // SettingsGeneralResetLogo
    SettingsGeneralResetLogo = document.getElementById(
      "SettingsGeneralResetLogo"
    );
    SettingsGeneralResetLogo.classList.add("SettingsGeneralMenusLogo");
    // SettingsGeneralResetTitle
    SettingsGeneralResetTitle = document.getElementById(
      "SettingsGeneralResetTitle"
    );
    SettingsGeneralResetTitle.classList.add("SettingsGeneralMenusTitle");

    //SettingsGeneralListMenus
    SettingsGeneralListMenus = document.getElementsByClassName(
      "SettingsGeneralListMenus"
    );
    for (let i = 0; i < SettingsGeneralListMenus.length; i++) {
      SettingsGeneralListMenus[i].style.border =
        "1px solid var(--menuElementColor01)";
      SettingsGeneralListMenus[i].style.borderRadius = "10px";
      SettingsGeneralListMenus[i].style.padding = "10px";
      SettingsGeneralListMenus[i].style.marginTop = "20px";
    }
    // SettingsGeneralMenus
    SettingsGeneralMenus = document.getElementsByClassName(
      "SettingsGeneralMenus"
    );
    for (let i = 0; i < SettingsGeneralMenus.length; i++) {
      SettingsGeneralMenus[i].style.paddingTop = "10px";
      SettingsGeneralMenus[i].style.paddingBottom = "10px";
      SettingsGeneralMenus[i].style.display = "flex";
      SettingsGeneralMenus[i].style.cursor = "pointer";
      SettingsGeneralMenus[i].style.userSelect = "none";
    }
    // SettingsGeneralMenusLogo
    SettingsGeneralMenusLogo = document.getElementsByClassName(
      "SettingsGeneralMenusLogo"
    );
    for (let i = 0; i < SettingsGeneralMenusLogo.length; i++) {
      SettingsGeneralMenusLogo[i].style.height = "40px";
    }
    // SettingsGeneralMenusTitle
    SettingsGeneralMenusTitle = document.getElementsByClassName(
      "SettingsGeneralMenusTitle"
    );
    for (let i = 0; i < SettingsGeneralMenusTitle.length; i++) {
      SettingsGeneralMenusTitle[i].style.color = "var(--textColor)";
      SettingsGeneralMenusTitle[i].style.marginTop = "auto";
      SettingsGeneralMenusTitle[i].style.marginBottom = "auto";
      SettingsGeneralMenusTitle[i].style.marginLeft = "5px";
    }
  }
  function DisplaySettingsApparency() {
    HideSettingsMenusBackgrounds();
    SettingsApparency.style.backgroundColor = "var(--buttonColor02)";
    ApplicationSettingsPart2.innerHTML = `
    <div id=SettingsApparencyPart></div>
    `;
    // SettingsApparencyPart
    SettingsApparencyPart = document.getElementById("SettingsApparencyPart");
    SettingsApparencyPart.style.margin = "40px";
    SettingsApparencyPart.innerHTML = `
    <h2 id="SettingsApparencyListTitle">Apparence</h2>
    <div id="SettingsApparencyList">
      <h3 id="SettingsApparencyTypeTitle">Mode d'apparence</h3>
      <img id="SettingsApparencyTypeDark" src="./Assets/Settings/Themes/ApparencyDarkMode.webp"></img>
      <img id="SettingsApparencyTypeLight" src="./Assets/Settings/Themes/ApparencyLightMode.webp"></img>
    </div>

    <div id="SettingsApparencyList2">
      <h3 id="SettingsApparencyAccentColorTitle">Couleur d'accentuation</h3>
      <div id="SettingsApparencyAccentColor1"></div>
      <div id="SettingsApparencyAccentColor2"></div>
      <div id="SettingsApparencyAccentColor3"></div>
      <div id="SettingsApparencyAccentColor4"></div>
      <div id="SettingsApparencyAccentColor5"></div>
      <div id="SettingsApparencyAccentColor6"></div>
      <div id="SettingsApparencyAccentColor7"></div>
      <div id="SettingsApparencyAccentColor8"></div>
    </div>
    `;

    // SettingsApparencyListTitle
    SettingsApparencyListTitle = document.getElementById(
      "SettingsApparencyListTitle"
    );
    SettingsApparencyListTitle.style.color = "var(--textColor)";
    SettingsApparencyListTitle.style.userSelect = "none";
    // SettingsApparencyList
    SettingsApparencyList = document.getElementById("SettingsApparencyList");
    SettingsApparencyList.style.border = "1px solid var(--menuElementColor01)";
    SettingsApparencyList.style.borderRadius = "10px";
    SettingsApparencyList.style.marginTop = "20px";
    SettingsApparencyList.style.display = "flex";
    // SettingsApparencyList2
    SettingsApparencyList2 = document.getElementById("SettingsApparencyList2");
    SettingsApparencyList2.style.border = "1px solid var(--menuElementColor01)";
    SettingsApparencyList2.style.borderRadius = "10px";
    SettingsApparencyList2.style.marginTop = "20px";
    SettingsApparencyList2.style.display = "flex";
    // SettingsApparencyTypeTitle
    SettingsApparencyTypeTitle = document.getElementById(
      "SettingsApparencyTypeTitle"
    );
    SettingsApparencyTypeTitle.style.color = "var(--textColor)";
    SettingsApparencyTypeTitle.style.margin = "10px";
    SettingsApparencyTypeTitle.style.userSelect = "none";
    // SettingsApparencyAccentColorTitle
    SettingsApparencyAccentColorTitle = document.getElementById(
      "SettingsApparencyAccentColorTitle"
    );
    SettingsApparencyAccentColorTitle.style.color = "var(--textColor)";
    SettingsApparencyAccentColorTitle.style.margin = "10px";
    SettingsApparencyAccentColorTitle.style.userSelect = "none";
    // SettingsApparencyTypeDark
    SettingsApparencyTypeDark = document.getElementById(
      "SettingsApparencyTypeDark"
    );
    SettingsApparencyTypeDark.style.cursor = "pointer";
    SettingsApparencyTypeDark.style.userSelect = "none";
    SettingsApparencyTypeDark.style.marginLeft = "auto";
    SettingsApparencyTypeDark.style.filter = "opacity(1)";
    // SettingsApparencyTypeLight
    SettingsApparencyTypeLight = document.getElementById(
      "SettingsApparencyTypeLight"
    );
    SettingsApparencyTypeLight.style.cursor = "pointer";
    SettingsApparencyTypeLight.style.userSelect = "none";
    if (SystemTheme == "dark") {
      SettingsApparencyTypeLight.style.filter = "opacity(0.2)";
    } else if (SystemTheme == "light") {
      SettingsApparencyTypeDark.style.filter = "opacity(0.2)";
    }

    SettingsApparencyTypeDark.addEventListener("click", ChangeToDarkTheme);
    SettingsApparencyTypeLight.addEventListener("click", ChangeToLightTheme);

    // SettingsApparencyAccentColor1
    SettingsApparencyAccentColor1 = document.getElementById(
      "SettingsApparencyAccentColor1"
    );
    SettingsApparencyAccentColor1.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor1.style.marginLeft = "auto";
    SettingsApparencyAccentColor1.style.backgroundColor = "rgb(53,121,246)";
    // SettingsApparencyAccentColor2
    SettingsApparencyAccentColor2 = document.getElementById(
      "SettingsApparencyAccentColor2"
    );
    SettingsApparencyAccentColor2.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor2.style.backgroundColor = "rgb(155,84,162)";
    // SettingsApparencyAccentColor3
    SettingsApparencyAccentColor3 = document.getElementById(
      "SettingsApparencyAccentColor3"
    );
    SettingsApparencyAccentColor3.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor3.style.backgroundColor = "rgb(229,92,156)";
    // SettingsApparencyAccentColor4
    SettingsApparencyAccentColor4 = document.getElementById(
      "SettingsApparencyAccentColor4"
    );
    SettingsApparencyAccentColor4.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor4.style.backgroundColor = "rgb(235,95,94)";
    // SettingsApparencyAccentColor5
    SettingsApparencyAccentColor5 = document.getElementById(
      "SettingsApparencyAccentColor5"
    );
    SettingsApparencyAccentColor5.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor5.style.backgroundColor = "rgb(231,136,58)";
    // SettingsApparencyAccentColor6
    SettingsApparencyAccentColor6 = document.getElementById(
      "SettingsApparencyAccentColor6"
    );
    SettingsApparencyAccentColor6.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor6.style.backgroundColor = "rgb(246,200,68)";
    // SettingsApparencyAccentColor7
    SettingsApparencyAccentColor7 = document.getElementById(
      "SettingsApparencyAccentColor7"
    );
    SettingsApparencyAccentColor7.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor7.style.backgroundColor = "rgb(120,184,86)";
    // SettingsApparencyAccentColor8
    SettingsApparencyAccentColor8 = document.getElementById(
      "SettingsApparencyAccentColor8"
    );
    SettingsApparencyAccentColor8.classList.add(
      "SettingsApparencyAccentColors"
    );
    SettingsApparencyAccentColor8.style.backgroundColor = "rgb(140,140,140)";
    // SettingsApparencyAccentColors
    SettingsApparencyAccentColors = document.getElementsByClassName(
      "SettingsApparencyAccentColors"
    );
    for (let i = 0; i < SettingsApparencyAccentColors.length; i++) {
      SettingsApparencyAccentColors[i].style.height = "20px";
      SettingsApparencyAccentColors[i].style.width = "20px";
      SettingsApparencyAccentColors[i].style.borderRadius = "20px";
      SettingsApparencyAccentColors[i].style.marginTop = "auto";
      SettingsApparencyAccentColors[i].style.marginBottom = "auto";
      SettingsApparencyAccentColors[i].style.marginRight = "15px";
      SettingsApparencyAccentColors[i].style.cursor = "pointer";
      SettingsApparencyAccentColors[i].style.transition = "200ms";
    }
    SettingsApparencyResetAccentColors(); // Reset All Accents colors
    // SettingsApparencyAccentColor1 #2
    if (SystemAccentColor == 1) {
      SettingsApparencyAccentColor1.style.filter = "opacity(1)";
    } else if (SystemAccentColor == 2) {
      SettingsApparencyAccentColor2.style.filter = "opacity(1)";
    } else if (SystemAccentColor == 3) {
      SettingsApparencyAccentColor3.style.filter = "opacity(1)";
    } else if (SystemAccentColor == 4) {
      SettingsApparencyAccentColor4.style.filter = "opacity(1)";
    } else if (SystemAccentColor == 5) {
      SettingsApparencyAccentColor5.style.filter = "opacity(1)";
    } else if (SystemAccentColor == 6) {
      SettingsApparencyAccentColor6.style.filter = "opacity(1)";
    } else if (SystemAccentColor == 7) {
      SettingsApparencyAccentColor7.style.filter = "opacity(1)";
    } else if (SystemAccentColor == 8) {
      SettingsApparencyAccentColor8.style.filter = "opacity(1)";
    }

    SettingsApparencyAccentColor1.addEventListener(
      "click",
      ChangeToAccentColor1
    );
    SettingsApparencyAccentColor2.addEventListener(
      "click",
      ChangeToAccentColor2
    );
    SettingsApparencyAccentColor3.addEventListener(
      "click",
      ChangeToAccentColor3
    );
    SettingsApparencyAccentColor4.addEventListener(
      "click",
      ChangeToAccentColor4
    );
    SettingsApparencyAccentColor5.addEventListener(
      "click",
      ChangeToAccentColor5
    );
    SettingsApparencyAccentColor6.addEventListener(
      "click",
      ChangeToAccentColor6
    );
    SettingsApparencyAccentColor7.addEventListener(
      "click",
      ChangeToAccentColor7
    );
    SettingsApparencyAccentColor8.addEventListener(
      "click",
      ChangeToAccentColor8
    );

    function ChangeToAccentColor1() {
      SettingsApparencyResetAccentColors();
      SystemAccentColor = 1;
      SettingsApparencyAccentColor1.style.filter = "opacity(1)";
      document.body.style.setProperty(
        "--buttonColor02",
        "rgba(52, 120, 246, 0.8)"
      );
    }
    function ChangeToAccentColor2() {
      SettingsApparencyResetAccentColors();
      SystemAccentColor = 2;
      SettingsApparencyAccentColor2.style.filter = "opacity(1)";
      document.body.style.setProperty("--buttonColor02", "rgb(155,84,162)");
    }
    function ChangeToAccentColor3() {
      SystemAccentColor = 3;
      SettingsApparencyResetAccentColors();
      SettingsApparencyAccentColor3.style.filter = "opacity(1)";
      document.body.style.setProperty("--buttonColor02", "rgb(229,92,156)");
    }
    function ChangeToAccentColor4() {
      SystemAccentColor = 4;
      SettingsApparencyResetAccentColors();
      SettingsApparencyAccentColor4.style.filter = "opacity(1)";
      document.body.style.setProperty("--buttonColor02", "rgb(235,95,94)");
    }
    function ChangeToAccentColor5() {
      SystemAccentColor = 5;
      SettingsApparencyResetAccentColors();
      SettingsApparencyAccentColor5.style.filter = "opacity(1)";
      document.body.style.setProperty("--buttonColor02", "rgb(231,136,58)");
    }
    function ChangeToAccentColor6() {
      SystemAccentColor = 6;
      SettingsApparencyResetAccentColors();
      SettingsApparencyAccentColor6.style.filter = "opacity(1)";
      document.body.style.setProperty("--buttonColor02", "rgb(246,200,68)");
    }
    function ChangeToAccentColor7() {
      SystemAccentColor = 7;
      SettingsApparencyResetAccentColors();
      SettingsApparencyAccentColor7.style.filter = "opacity(1)";
      document.body.style.setProperty("--buttonColor02", "rgb(120,184,86)");
    }
    function ChangeToAccentColor8() {
      SystemAccentColor = 8;
      SettingsApparencyResetAccentColors();
      SettingsApparencyAccentColor8.style.filter = "opacity(1)";
      document.body.style.setProperty("--buttonColor02", "rgb(140,140,140)");
    }
    function SettingsApparencyResetAccentColors() {
      for (let i = 0; i < SettingsApparencyAccentColors.length; i++) {
        SettingsApparencyAccentColors[i].style.filter = "opacity(0.3)";
      }
    }

    function ChangeToDarkTheme() {
      SystemTheme = "dark"; // Saving Theme in variable
      SystemBackground = 2;
      SettingsApparencyTypeDark.style.filter = "opacity(1)";
      SettingsApparencyTypeLight.style.filter = "opacity(0.2)";

      document.body.style.setProperty(
        "--background",
        "url(./Assets/Backgrounds/default-night.webp)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor01",
        "rgb(47, 49, 51)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor02",
        "rgba(47, 49, 51, 0.504)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor03",
        "rgba(47, 49, 51, 0.804)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor04",
        "rgba(0, 0, 0, 0.700)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor05",
        "rgba(0, 0, 0, 0.600)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor01",
        "rgb(10, 10, 10)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor02",
        "rgb(20, 20, 20)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor03",
        "rgb(31, 31, 31)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor04",
        "rgb(10, 10, 10)"
      );
      document.body.style.setProperty(
        "--teamsElementColor01",
        "rgb(41, 41, 41)"
      );
      document.body.style.setProperty(
        "--systemElementColor01",
        "rgba(0, 0, 0, 0.237)"
      );
      document.body.style.setProperty(
        "--buttonColor01",
        "rgba(47, 49, 51, 0.504)"
      );
      document.body.style.setProperty(
        "--menuElementColor01",
        "rgba(255, 255, 255, 0.432)"
      );

      document.body.style.setProperty("--elementBackgroundColor05", "white");

      document.body.style.setProperty("--textColor", "white");
    }
    function ChangeToLightTheme() {
      SystemTheme = "light"; // Saving Theme in variable
      SystemBackground = "1";
      SettingsApparencyTypeDark.style.filter = "opacity(0.2)";
      SettingsApparencyTypeLight.style.filter = "opacity(1)";

      document.body.style.setProperty(
        "--background",
        "url(./Assets/Backgrounds/default-light.webp)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor01",
        "rgb(237, 238, 239)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor02",
        "rgba(237, 238, 239, 0.504)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor03",
        "rgba(237, 238, 239, 0.804)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor04",
        "rgba(255, 255, 255, 0.700)"
      );
      document.body.style.setProperty(
        "--windowBackgroundColor05",
        "rgba(255, 255, 255, 0.600)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor01",
        "rgb(235, 235, 235)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor02",
        "rgb(240, 240, 240)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor03",
        "rgb(245, 245, 245)"
      );
      document.body.style.setProperty(
        "--teamsBackgroundColor04",
        "rgb(69, 71, 140)"
      );
      document.body.style.setProperty(
        "--teamsElementColor01",
        "rgb(255, 255, 255)"
      );
      document.body.style.setProperty(
        "--systemElementColor01",
        "rgba(255, 255, 255, 0.237)"
      );
      document.body.style.setProperty(
        "--buttonColor01",
        "rgba(255, 255, 255, 0.504)"
      );

      document.body.style.setProperty(
        "--menuElementColor01",
        "rgba(0, 0, 0, 0.232)"
      );

      document.body.style.setProperty("--elementBackgroundColor05", "black");

      document.body.style.setProperty("--textColor", "black");
    }

    SettingsApparencyResized();
    addEventListener("resize", SettingsApparencyResized);

    function SettingsApparencyResized() {
      if (window.innerWidth <= 1400) {
        SettingsApparencyList.style.display = "grid";
        SettingsApparencyList2.style.display = "grid";
        SettingsApparencyList2.style.gridTemplateColumns = "auto";
        SettingsApparencyAccentColor1.style.marginLeft = "0";
        SettingsApparencyTypeDark.style.marginLeft = "0";
      } else {
        SettingsApparencyList.style.display = "flex";
        SettingsApparencyList2.style.display = "flex";
        SettingsApparencyTypeDark.style.marginLeft = "auto";
        SettingsApparencyAccentColor1.style.marginLeft = "auto";
      }
    }
  }
  function DisplaySettingsBackground() {
    HideSettingsMenusBackgrounds();
    SettingsBackground.style.backgroundColor = "var(--buttonColor02)";
    ApplicationSettingsPart2.innerHTML = `
    <div id=SettingsBackgroundPart></div>
    `;
    SettingsBackgroundPart = document.getElementById("SettingsBackgroundPart");
    SettingsBackgroundPart.style.margin = "40px";
    SettingsBackgroundPart.innerHTML = `
    <h2 id="SettingsBackgroundPartTitle">Fond d'écran</h2>
    <div id="SettingsBackgroundPartList">
      <img id="SettingsBackgroundPartBackground01" src="./Assets/Backgrounds/default-light-minia.jpg"></img>
      <img id="SettingsBackgroundPartBackground02"src="./Assets/Backgrounds/default-night-minia.jpg"></img>
    </div>
    `;
    SettingsBackgroundPartTitle = document.getElementById(
      "SettingsBackgroundPartTitle"
    );
    SettingsBackgroundPartTitle.style.color = "var(--textColor)";
    SettingsBackgroundPartList = document.getElementById(
      "SettingsBackgroundPartList"
    );
    SettingsBackgroundPartList.style.border =
      "1px solid var(--menuElementColor01)";
    SettingsBackgroundPartList.style.borderRadius = "10px";
    SettingsBackgroundPartList.style.padding = "10px";
    SettingsBackgroundPartList.style.marginTop = "20px";
    SettingsBackgroundPartList.style.display = "flex";

    // SettingsBackgroundPartBackground01
    SettingsBackgroundPartBackground01 = document.getElementById(
      "SettingsBackgroundPartBackground01"
    );
    SettingsBackgroundPartBackground01.style.height = "50px";
    SettingsBackgroundPartBackground01.style.borderRadius = "5px";
    SettingsBackgroundPartBackground01.style.margin = "20px";
    SettingsBackgroundPartBackground01.style.cursor = "pointer";
    SettingsBackgroundPartBackground01.style.userSelect = "none";

    SettingsBackgroundPartBackground02 = document.getElementById(
      "SettingsBackgroundPartBackground02"
    );
    SettingsBackgroundPartBackground02.style.height = "52px";
    SettingsBackgroundPartBackground02.style.borderRadius = "5px";
    SettingsBackgroundPartBackground02.style.margin = "20px";
    SettingsBackgroundPartBackground02.style.cursor = "pointer";
    SettingsBackgroundPartBackground02.style.userSelect = "none";

    if (SystemBackground == 1) {
      SettingsBackgroundPartBackground01.style.filter = "opacity(1)";
      SettingsBackgroundPartBackground02.style.filter = "opacity(0.3)";
    } else if (SystemBackground == 2) {
      SettingsBackgroundPartBackground01.style.filter = "opacity(0.3)";
      SettingsBackgroundPartBackground02.style.filter = "opacity(1)";
    }

    SettingsBackgroundPartBackground01.addEventListener(
      "click",
      ChangeToBackground01
    );
    SettingsBackgroundPartBackground02.addEventListener(
      "click",
      ChangeToBackground02
    );

    function ChangeToBackground01() {
      SystemBackground = "1";
      SettingsBackgroundPartBackground01.style.filter = "opacity(1)";
      SettingsBackgroundPartBackground02.style.filter = "opacity(0.3)";
      document.body.style.setProperty(
        "--background",
        "url(./Assets/Backgrounds/default-light.webp)"
      );
    }
    function ChangeToBackground02() {
      SystemBackground = "2";
      SettingsBackgroundPartBackground01.style.filter = "opacity(0.3)";
      SettingsBackgroundPartBackground02.style.filter = "opacity(1)";
      document.body.style.setProperty(
        "--background",
        "url(./Assets/Backgrounds/default-night.webp)"
      );
    }
    SettingsBackgroundResized();
    addEventListener("resize", SettingsBackgroundResized);

    function SettingsBackgroundResized() {
      if (window.innerWidth <= 420) {
        SettingsBackgroundPartList.style.display = "grid";
      } else {
        SettingsBackgroundPartList.style.display = "flex";
      }
    }
  }
  function HideSettingsMenusBackgrounds() {
    SettingsGeneral.style.backgroundColor = "transparent";
    SettingsApparency.style.backgroundColor = "transparent";
    SettingsBackground.style.backgroundColor = "transparent";
  }

  H1 = document.getElementsByTagName("H1")[0];
  H1.style.color = "var(--textColor)";
  H1.style.margin = "30px";
  H1.style.userSelect = "none";

  //ApplicationSettingsPart2
  ApplicationSettingsPart2 = document.getElementById(
    "ApplicationSettingsPart2"
  );
  ApplicationSettingsPart2.style.backgroundColor =
    "var(--windowBackgroundColor01)";

  DisplaySettingsGeneral(); // Open General Settings by default

  SettingsWindowResized();
  addEventListener("resize", SettingsWindowResized);

  function SettingsWindowResized() {
    if (window.innerWidth <= 800) {
      SettingsPart1List.style.display = "flex";
      ApplicationSettingsParts.style.gridTemplateColumns = "1fr";
      ApplicationSettingsParts.style.gridTemplateRows = "70px auto";
      H1.style.position = "absolute";
      H1.innerHTML = "";

      for (let i = 0; i < SettingsMenusLogo.length; i++) {
        SettingsMenusLogo[i].style.margin = "auto";
      }
    } else {
      SettingsPart1List.style.removeProperty("display");
      ApplicationSettingsParts.style.gridTemplateColumns = "1fr 2.5fr";
      ApplicationSettingsParts.style.gridTemplateRows = "1fr";
      H1.style.removeProperty("position");
      H1.innerHTML = "Réglages Système";
      H1.style.color = "var(--textColor)";
      H1.style.margin = "30px";
      H1.style.userSelect = "none";

      for (let i = 0; i < SettingsMenusLogo.length; i++) {
        SettingsMenusLogo[i].style.margin = "0 0 0 10px";
      }
    }
  }
}
function CloseApplication() {
  CloseStatusBarContextualMenu();
  Application.style.opacity = "0";
  StatusBarApplicationName.innerHTML = "Finder";
}
function OpenStatusBarContextualMenu(h, w, t, l, type) {
  StatusBarContextualMenu.style.opacity = "1";
  StatusBarContextualMenu.style.height = h;
  StatusBarContextualMenu.style.width = w;
  StatusBarContextualMenu.style.marginTop = t;
  StatusBarContextualMenu.style.marginLeft = l;
  StatusBarContextualMenu.style.backgroundColor =
    "var(--windowBackgroundColor02)";
  StatusBarContextualMenu.style.backdropFilter = "blur(50px)";
  StatusBarContextualMenu.style.border = "1px";
  StatusBarContextualMenu.style.borderStyle = "solid";
  StatusBarContextualMenu.style.borderColor = "rgba(255, 255, 255, 0.379)";

  if (type == "AppleMenu") {
    StatusBarContextualMenu.innerHTML = `
    <ul id="AppleMenu">
      <li id="AppleMenuSettings">Reglages du système...</li>
      <li id="AppleMenuReboot">Redémarrer</li>
      <li id="AppleMenuShutdown">Eteindre</li>
    </ul>
  `;
    // AppleMenu
    AppleMenu = document.getElementById("AppleMenu");
    AppleMenu.classList.add("StatusBarMenu");
    // AppleMenuSettings
    AppleMenuSettings = document.getElementById("AppleMenuSettings");
    AppleMenuSettings.classList.add("RegularButton01");
    AppleMenuSettings.addEventListener("click", LaunchSettingsApp);
    // AppleMenuReboot
    AppleMenuReboot = document.getElementById("AppleMenuReboot");
    AppleMenuReboot.classList.add("RegularButton01");
    AppleMenuReboot.addEventListener("click", SystemReboot);
    // AppleMenuShutdown
    AppleMenuShutdown = document.getElementById("AppleMenuShutdown");
    AppleMenuShutdown.classList.add("RegularButton01");
    AppleMenuShutdown.addEventListener("click", SystemShutdown);
  } else if ((type = "ApplicationNameMenu")) {
    StatusBarContextualMenu.innerHTML = `
    <ul id="ApplicationNameMenu">
      <li id="ApplicationNameQuit">Quitter</li>
    </ul>
  `;
    // ApplicationNameMenu
    ApplicationNameMenu = document.getElementById("ApplicationNameMenu");
    ApplicationNameMenu.classList.add("StatusBarMenu");
    // ApplicationNameQuit
    ApplicationNameQuit = document.getElementById("ApplicationNameQuit");
    ApplicationNameQuit.classList.add("RegularButton01");
    ApplicationNameQuit.addEventListener("click", CloseApplication);
  }

  // RegularButton01
  RegularButton01 = document.getElementsByClassName("RegularButton01");
  for (let i = 0; i < RegularButton01.length; i++) {
    RegularButton01[i].style.color = "var(--textColor)";
    RegularButton01[i].style.fontSize = "large";
    RegularButton01[i].style.display = "block";
    RegularButton01[i].style.marginTop = "auto";
    RegularButton01[i].style.marginBottom = "auto";
    RegularButton01[i].style.padding = "5px 10px 5px 10px";
    RegularButton01[i].style.borderRadius = "5px";
    RegularButton01[i].style.transition = "50ms";
    RegularButton01[i].style.cursor = "pointer";
    RegularButton01[i].style.userSelect = "none";
    RegularButton01[i].style.transition = "50ms";
  }
  // StatusBarMenu
  StatusBarMenu = document.getElementsByClassName("StatusBarMenu");
  for (let i = 0; i < StatusBarMenu.length; i++) {
    StatusBarMenu[i].style.marginTop = "15px";
    StatusBarMenu[i].style.marginLeft = "15px";
    StatusBarMenu[i].style.marginRight = "15px";
  }

  if (window.innerWidth <= 1000) {
    Application.innerHTML = "";
    Application.style.height = 0;
    Application.style.width = 0;
    Application.style.opacity = "0";
  }
}
function CloseStatusBarContextualMenu() {
  StatusBarContextualMenu.style.opacity = "0";
}
async function SystemReboot() {
  CloseStatusBarContextualMenu();
  await new Promise((r) => setTimeout(r, 200));
  CloseApplication();
  await new Promise((r) => setTimeout(r, 100));
  Application.innerHTML = "";
  await new Promise((r) => setTimeout(r, 1000));
  Dock.style.opacity = "0";
  await new Promise((r) => setTimeout(r, 100));
  Dock.innerHTML = "";
  await new Promise((r) => setTimeout(r, 500));
  StatusBar.style.opacity = "0";
  await new Promise((r) => setTimeout(r, 100));
  StatusBar.innerHTML = "";
  await new Promise((r) => setTimeout(r, 200));
  App.style.background = "black";
  await new Promise((r) => setTimeout(r, 100));
  App.innerHTML = "";
  await new Promise((r) => setTimeout(r, 2000));
  StartApp(); // Load App
  LoadListeners(); // Register all Listeners
  LaunchFinderApp();
  WindowResized();
}
async function SystemShutdown() {
  CloseStatusBarContextualMenu();
  await new Promise((r) => setTimeout(r, 200));
  CloseApplication();
  await new Promise((r) => setTimeout(r, 100));
  Application.innerHTML = "";
  await new Promise((r) => setTimeout(r, 1000));
  Dock.style.opacity = "0";
  await new Promise((r) => setTimeout(r, 100));
  Dock.innerHTML = "";
  await new Promise((r) => setTimeout(r, 500));
  StatusBar.style.opacity = "0";
  await new Promise((r) => setTimeout(r, 100));
  StatusBar.innerHTML = "";
  await new Promise((r) => setTimeout(r, 200));
  App.style.background = "black";
  await new Promise((r) => setTimeout(r, 100));
  App.innerHTML = "";
  await new Promise((r) => setTimeout(r, 2000));
  window.location.replace("https://google.com");
}
function WindowResized() {
  if (window.innerWidth <= 1650) {
    App.style.height = "98%";
    App.style.width = "98%";
    App.style.top = "1%";
    App.style.left = "1%";
  } else {
    App.style.height = "90%";
    App.style.width = "90%";
    App.style.top = "5%";
    App.style.left = "5%";
  }
  if (window.innerWidth <= 1205) {
    App.style.backgroundSize = (1 / window.innerWidth) * 120000 + "%";
  } else {
    App.style.backgroundSize = "100%";
  }

  if (window.innerWidth <= 1000 && StatusBarApplicationName.innerHTML != "") {
    Application.style.top = "47%";
    Application.style.left = "45%";
    Application.style.height = "80%";
    Application.style.width = "85%";
  } else {
    Application.style.top = ResponsiveDefaultTop;
    Application.style.left = ResponsiveDefaultLeft;
    Application.style.height = ResponsiveDefaultHeight;
    Application.style.width = ResponsiveDefaultWidth;
  }
  if (window.innerWidth <= 600) {
    DockSafariIcon.style.position = "absolute";
    DockSafariIcon.style.height = "0";
    DockSafariIcon.style.zIndex = "-1";
    DockSettingsIcon.style.position = "absolute";
    DockSettingsIcon.style.height = "0";
    DockSettingsIcon.style.zIndex = "-1";
  } else {
    DockSafariIcon.style.removeProperty("position");
    DockSafariIcon.style.height = "50px";
    DockSafariIcon.style.removeProperty("zIndex");

    DockSettingsIcon.style.removeProperty("position");
    DockSettingsIcon.style.height = "50px";
    DockSettingsIcon.style.removeProperty("zIndex");
  }

  if (window.innerWidth <= 450) {
    DockMapsIcon.style.position = "absolute";
    DockMapsIcon.style.height = "0";
    DockMapsIcon.style.zIndex = "-1";
    DockTeamsIcon.style.position = "absolute";
    DockTeamsIcon.style.height = "0";
    DockTeamsIcon.style.zIndex = "-1";
  } else {
    DockMapsIcon.style.removeProperty("position");
    DockMapsIcon.style.height = "50px";
    DockMapsIcon.style.removeProperty("zIndex");

    DockTeamsIcon.style.removeProperty("position");
    DockTeamsIcon.style.height = "50px";
    DockTeamsIcon.style.removeProperty("zIndex");
  }

  if (window.innerWidth <= 330) {
    DockTerminalIcon.style.position = "absolute";
    DockTerminalIcon.style.height = "0";
    DockTerminalIcon.style.zIndex = "-1";
    DockVscodeIcon.style.position = "absolute";
    DockVscodeIcon.style.height = "0";
    DockVscodeIcon.style.zIndex = "-1";
    DockMailsIcon.style.position = "absolute";
    DockMailsIcon.style.height = "0";
    DockMailsIcon.style.zIndex = "-1";
  } else {
    DockTerminalIcon.style.removeProperty("position");
    DockTerminalIcon.style.height = "50px";
    DockTerminalIcon.style.removeProperty("zIndex");
    DockVscodeIcon.style.removeProperty("position");
    DockVscodeIcon.style.height = "50px";
    DockVscodeIcon.style.removeProperty("zIndex");
    DockMailsIcon.style.removeProperty("position");
    DockMailsIcon.style.height = "50px";
    DockMailsIcon.style.removeProperty("zIndex");
  }

  if (window.innerWidth <= 150) {
    DockFinderIcon.style.position = "absolute";
    DockFinderIcon.style.height = "0";
    DockFinderIcon.style.zIndex = "-1";
  } else {
    DockFinderIcon.style.removeProperty("position");
    DockFinderIcon.style.height = "50px";
    DockFinderIcon.style.removeProperty("zIndex");
  }
}
async function StartApp() {
  //// ----  CSS Variables ---- \\\\
  document.body.style.setProperty(
    "--background",
    "url(./Assets/Backgrounds/default-night.webp)"
  );
  document.body.style.setProperty(
    "--windowBackgroundColor01",
    "rgb(47, 49, 51)"
  );
  document.body.style.setProperty(
    "--windowBackgroundColor02",
    "rgba(47, 49, 51, 0.504)"
  );
  document.body.style.setProperty(
    "--windowBackgroundColor03",
    "rgba(47, 49, 51, 0.804)"
  );
  document.body.style.setProperty(
    "--windowBackgroundColor04",
    "rgba(0, 0, 0, 0.700)"
  );
  document.body.style.setProperty(
    "--windowBackgroundColor05",
    "rgba(0, 0, 0, 0.600)"
  );
  document.body.style.setProperty(
    "--teamsBackgroundColor01",
    "rgb(10, 10, 10)"
  );
  document.body.style.setProperty(
    "--teamsBackgroundColor02",
    "rgb(20, 20, 20)"
  );
  document.body.style.setProperty(
    "--teamsBackgroundColor03",
    "rgb(31, 31, 31)"
  );
  document.body.style.setProperty(
    "--teamsBackgroundColor04",
    "rgb(10, 10, 10)"
  );
  document.body.style.setProperty("--teamsElementColor01", "rgb(41, 41, 41)");

  document.body.style.setProperty(
    "--systemElementColor01",
    "rgba(0, 0, 0, 0.237)"
  );
  document.body.style.setProperty("--buttonColor01", "rgba(47, 49, 51, 0.504)");
  document.body.style.setProperty("--buttonColor02", "rgba(52, 120, 246, 0.8)");
  document.body.style.setProperty(
    "--menuElementColor01",
    "rgba(255, 255, 255, 0.432)"
  );

  document.body.style.setProperty("--elementBackgroundColor05", "white");

  document.body.style.setProperty("--textColor", "white");
  //// ---- JS Variables ---- \\\\
  SystemTheme = "dark";
  SystemAccentColor = 1;
  SystemBackground = 2;
  //// ----  Body ---- \\\\
  document.body.style.backgroundColor = "black";

  //// ---- App ---- \\\\
  App = document.getElementById("App");
  App.style.position = "absolute";
  App.style.background = "var(--background)";
  App.style.backgroundSize = "100%";
  App.style.backgroundRepeat = "no-repeat";
  App.style.height = "90%";
  App.style.width = "90%";
  App.style.top = "5%";
  App.style.left = "5%";
  App.style.overflow = "hidden";
  App.style.transition = "1s";
  App.style.borderRadius = "30px 30px 10px 10px";
  App.innerHTML = `
  <div id="StatusBar"></div>
  <div id="Application"></div>
  <div id="Dock"></div>
  `;

  //// ---- StatusBar ---- \\\\
  StatusBar = document.getElementById("StatusBar");
  StatusBar.style.height = "40px";
  StatusBar.style.width = "100%";
  StatusBar.style.backgroundColor = "var(--systemElementColor01)";
  StatusBar.style.borderRadius = "30px 30px 0 0";
  StatusBar.style.backdropFilter = "blur(10px)";
  StatusBar.style.display = "flex";
  StatusBar.innerHTML = `
  <img id="StatusBarAppleLogo"  src="./Assets/Logos/apple.svg" alt="">
  <span id="StatusBarApplicationName"></span>
  <div id="StatusBarContextualMenu"></div>
  `;
  // StatusBarAppleLogo
  StatusBarAppleLogo = document.getElementById("StatusBarAppleLogo");
  StatusBarAppleLogo.style.marginLeft = "10px";
  StatusBarAppleLogo.style.width = "auto";
  StatusBarAppleLogo.style.cursor = "pointer";
  StatusBarAppleLogo.classList.add("StatusBarElements");
  // StatusBarApplicationName
  StatusBarApplicationName = document.getElementById(
    "StatusBarApplicationName"
  );
  StatusBarApplicationName.style.cursor = "pointer";
  StatusBarApplicationName.innerHTML = "Finder";
  StatusBarApplicationName.classList.add("StatusBarElements");
  // StatusBarElements
  StatusBarElements = document.getElementsByClassName("StatusBarElements");
  for (let i = 0; i < StatusBarElements.length; i++) {
    StatusBarElements[i].style.marginTop = "auto";
    StatusBarElements[i].style.marginBottom = "auto";
    StatusBarElements[i].style.padding = "5px 10px 5px 10px";
    StatusBarElements[i].style.fontSize = "1.2em";
    StatusBarElements[i].style.userSelect = "none";
    StatusBarElements[i].style.borderRadius = "5px";
    StatusBarElements[i].style.color = "white";
  }
  // StatusBarAppleLogo2
  StatusBarAppleLogo.style.height = "20px";
  StatusBarAppleLogo.style.paddingLeft = "20px";
  StatusBarAppleLogo.style.paddingRight = "15px";
  StatusBarAppleLogo.style.borderRadius = "20px 5px 5px 5px";
  // StatusBarContextualMenu
  StatusBarContextualMenu = document.getElementById("StatusBarContextualMenu");
  StatusBarContextualMenu.style.borderRadius = "10px";
  StatusBarContextualMenu.style.position = "absolute";
  StatusBarContextualMenu.style.opacity = "0";
  StatusBarContextualMenu.style.backdropFilter = "blur(100px)";

  //// ---- Application ---- \\\\
  Application = document.getElementById("Application");
  Application.style.position = "absolute";
  Application.style.height = "50%";
  Application.style.width = "50%";
  Application.style.top = "50%";
  Application.style.overflow = "hidden";
  Application.style.left = "50%";
  Application.style.transform = "translate(-50%, -50%)";
  Application.style.backgroundColor = "transparent";
  Application.style.opacity = "0";
  Application.style.borderRadius = "10px";
  Application.style.transition = "50ms";

  //// ---- Dock ---- \\\\
  Dock = document.getElementById("Dock");
  Dock.style.position = "absolute";
  Dock.style.display = "flex";
  Dock.style.bottom = "20px";
  Dock.style.left = "50%";
  Dock.style.height = "50px";
  Dock.style.padding = "5px";
  Dock.style.borderRadius = "10px";
  Dock.style.transform = "translate(-50%)";
  Dock.style.backgroundColor = "var(--systemElementColor01)";
  Dock.innerHTML = `
  <img id="DockFinderIcon" src="./Assets/AppsIcons/finder_minia.webp" alt=""></img>
  <img id="DockLaunchPadIcon" src="./Assets/AppsIcons/launchPad_minia.webp" alt=""></img>
  <img id="DockMailsIcon" src="./Assets/AppsIcons/mails_minia.webp" alt=""></img>
  <img id="DockMapsIcon" src="./Assets/AppsIcons/maps_minia.webp" alt=""></img>
  <img id="DockSafariIcon" src="./Assets/AppsIcons/safari_minia.webp" alt=""></img>
  <img id="DockTeamsIcon" src="./Assets/AppsIcons/teams_minia.webp" alt=""></img>
  <img id="DockTerminalIcon" src="./Assets/AppsIcons/terminal_minia.webp" alt=""></img>
  <img id="DockVscodeIcon" src="./Assets/AppsIcons/vscode_minia.webp" alt=""></img>  
  <img id="DockSettingsIcon" src="./Assets/AppsIcons/settings_minia.webp" alt=""></img>
  `;
  // DockFinderIcon
  DockFinderIcon = document.getElementById("DockFinderIcon");
  DockFinderIcon.classList.add("DockIcons");
  // DockLaunchPadIcon
  DockLaunchPadIcon = document.getElementById("DockLaunchPadIcon");
  DockLaunchPadIcon.classList.add("DockIcons");
  // DockMailsIcon
  DockMailsIcon = document.getElementById("DockMailsIcon");
  DockMailsIcon.classList.add("DockIcons");
  // DockMapsIcon
  DockMapsIcon = document.getElementById("DockMapsIcon");
  DockMapsIcon.classList.add("DockIcons");
  // DockSafariIcon
  DockSafariIcon = document.getElementById("DockSafariIcon");
  DockSafariIcon.classList.add("DockIcons");
  // DockTeamsIcon
  DockTeamsIcon = document.getElementById("DockTeamsIcon");
  DockTeamsIcon.classList.add("DockIcons");
  // DockTerminalIcon
  DockTerminalIcon = document.getElementById("DockTerminalIcon");
  DockTerminalIcon.classList.add("DockIcons");
  // DockVscodeIcon
  DockVscodeIcon = document.getElementById("DockVscodeIcon");
  DockVscodeIcon.classList.add("DockIcons");
  // DockSettingsIcon
  DockSettingsIcon = document.getElementById("DockSettingsIcon");
  DockSettingsIcon.classList.add("DockIcons");
  // DockIcons
  DockIcons = document.getElementsByClassName("DockIcons");
  for (let i = 0; i < DockIcons.length; i++) {
    DockIcons[i].style.height = "100%";
    DockIcons[i].style.width = "auto";
    DockIcons[i].style.margin = "auto";
    DockIcons[i].style.cursor = "pointer";
    DockIcons[i].style.marginLeft = "3px";
    DockIcons[i].style.marginRight = "3px";
    DockIcons[i].style.transition = "50ms";
    DockIcons[i].style.userSelect = "none";
  }
}
function LoadListeners() {
  addEventListener("resize", WindowResized);
  DockFinderIcon.addEventListener("click", LaunchFinderApp);
  DockLaunchPadIcon.addEventListener("click", LaunchLaunchPadApp);
  DockMailsIcon.addEventListener("click", LaunchMailsApp);
  DockMapsIcon.addEventListener("click", LaunchMapsApp);
  DockSafariIcon.addEventListener("click", LaunchSafariApp);
  DockTeamsIcon.addEventListener("click", LaunchTeamsApp);
  DockTerminalIcon.addEventListener("click", LaunchTerminalApp);
  DockVscodeIcon.addEventListener("click", LaunchVscodeApp);
  DockSettingsIcon.addEventListener("click", LaunchSettingsApp);

  Application.addEventListener("click", CloseStatusBarContextualMenu);
  Dock.addEventListener("click", CloseStatusBarContextualMenu);

  StatusBarAppleLogo.addEventListener("click", function () {
    OpenStatusBarContextualMenu("120px", "300px", "40px", "5px", "AppleMenu");
  });
  StatusBarApplicationName.addEventListener("click", function () {
    OpenStatusBarContextualMenu(
      "60px",
      "200px",
      "40px",
      "60px",
      "ApplicationNameMenu"
    );
  });
}
