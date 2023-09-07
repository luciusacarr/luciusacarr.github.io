var openedTab = NaN;


function hideOtherTabs(tab)
{
    if (tab != "readme.txt")
    {
        const readmeDiv = document.getElementById("readme.txt");
    
        readmeDiv.style.display = "none";
    }
    

    if (tab != "other.txt")
    {
        const readmeDiv = document.getElementById("other.txt");
    
        readmeDiv.style.display = "none";
    }

    console.log("hey ");
}

function closeTab(tab)
{

    tab.parentElement.remove();


    const numberNodes = document.getElementById("toptabbar").childNodes.length;


    if (numberNodes <= 5) {
        // open first child


        hideOtherTabs("none")
        openedTab = NaN;

    }
    else if (tab.title = openedTab)
    {
        // common case
        const page = document.getElementById("toptabbar").firstElementChild;

        openTab(page.firstElementChild.textContent);

        

    }
}

function openTab(tab)
{
    

    const readmeDiv = document.getElementById(tab);
    
    readmeDiv.style.display = "block";
    hideOtherTabs(tab);

    openedTab = tab;
}



function createTab(tabName) {
    const tab = document.getElementById("toptabbar");

    const div = document.createElement("div");
    
    div.className = "tabbutton";

    const tabButton = document.createElement("button");
    tabButton.className = "tablinks";
    tabButton.onclick = function() {openTab(tabName + ".txt");};
    tabButton.textContent = tabName +".txt";

    const closeButton = document.createElement("button");
    closeButton.className = "closetab";
    closeButton.type = "close";
    closeButton.onclick = function() {closeTab(closeButton);};
    
    const img = document.createElement("img");
    img.src = "photos\\close.png";
    img.alt = "Close";
    img.width = 20;
    img.height = 20;

    tab.appendChild(div);
    div.appendChild(tabButton);
    div.appendChild(closeButton);
    closeButton.appendChild(img);
}

