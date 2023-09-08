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


document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('readmeTextbox');
    const lineCount = document.getElementById('linecount');

    editor.addEventListener('click', () => {
        highlightCurrentLine("click");
    });

    editor.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === 'Backspace' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            setTimeout(() => {
                highlightCurrentLine(e);
            }, 10);
        }
    });

    function highlightCurrentLine(e) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        // Get the startContainer (where the selection or caret is)
        const startContainer = range.startContainer;

        // Check if the startContainer is the editor itself
        if (startContainer === editor) {
            // If the caret is at the beginning of the editor, set currentLine to the first line
            const currentLine = editor.querySelector('.line');
            
            // Remove previous highlight from all lines
            const highlightedLines = document.querySelectorAll('.line-highlight');
            highlightedLines.forEach((line) => {
                line.classList.remove('line-highlight');
            });

            // Add highlight to the current line
            currentLine.classList.add('line-highlight');
        } else {
            
            const currentLine = startContainer.nodeType === Node.TEXT_NODE ? startContainer.parentElement : startContainer;

            // Remove previous highlight from all lines
            const highlightedLines = document.querySelectorAll('.line-highlight');
            highlightedLines.forEach((line) => {
                line.classList.remove('line-highlight');
            });

            
            currentLine.classList.add('line-highlight');
        }
        // Deal with line numbers
        const numb = editor.childNodes.length;

        if ((numb !== lineCount.childElementCount) || (numb === 1 && e.key === 'Enter')) {
            if ((lineCount.childElementCount > 1 && e.key !== 'Enter') || (lineCount.childElementCount < numb)) {
                lineCount.innerHTML = "";
            }

            for (let i = 1; i <= numb; i++) {
                const line = document.createElement("div");
                line.id = "line";
                line.textContent = String(i);
                lineCount.appendChild(line);
            }
        }
    }
});
