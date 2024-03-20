var openedTab = NaN;


function hideOtherTabs(tab)
{

    const readmeDiv = document.getElementById("readme.txt");
    const other = document.getElementById("other.txt");
    const project1 = document.getElementById("maze_gen.proj");
    const project2 = document.getElementById("solar_model.proj");
    const research1 = document.getElementById("research.paper");
    const journalentries = document.getElementById("journal.entries");
    const bibpage = document.getElementById("bib.page");

    readmeDiv.style.display = "none";
    other.style.display = "none";
    project1.style.display = "none";
    project2.style.display = "none";
    research1.style.display = "none";
    journalentries.style.display = "none";
    bibpage.style.display = "none";

    if (tab != "none")
    {
        document.getElementById(tab).style.display = "block";
    }

}

function closeTab(tab) {
    const tabbar = document.getElementById("toptabbar");
    const tabs = Array.from(tabbar.children);
    const currentIndex = tabs.indexOf(tab.parentElement);

    const tabTitle = tab.title;

    tab.parentElement.remove();

    if (currentIndex === -1) {
        // Tab not found in the tabbar
        return;
    }

    
    const numberNodes = tabs.length;

    console.log(tabTitle + " " + openedTab);

    if (numberNodes <= 1) {
        

        // Open a new tab if the currently open tab is closed
        hideOtherTabs("none");
        openedTab = NaN;
    } else if (tabTitle === openedTab) {
        // If there's a tab before the closed one, open it
        if (currentIndex > 0) {
            const prevTab = tabs[currentIndex - 1];
            openTab(prevTab.firstElementChild.textContent);
        } else {
            // If there's no tab before it, open the next one
            const nextTab = tabs[currentIndex + 1];
            openTab(nextTab.firstElementChild.textContent);
        }
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
    tabButton.onclick = function() {openTab(tabName);};
    tabButton.textContent = tabName;

    const closeButton = document.createElement("button");
    closeButton.className = "closetab";
    closeButton.type = "close";
    closeButton.title = tabName;
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
        // Check if the Enter key (key code 13) is pressed
        if (e.key === 'Enter' || e.key === 'Backspace' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            // Delay the highlight for a brief moment to allow the new line to be added
            setTimeout(() => {
                highlightCurrentLine(e);
            }, 10);
        }

        if (e.key == "Enter" && e.shiftKey) {
            // Prevent the default behavior of a new line and add a new div
            e.preventDefault();
    

            highlightCurrentLine();
    
            const newDiv = document.createElement('div');
            
            // Add a line break (you can customize the content here)
    
            editor.appendChild(newDiv);
            newDiv.outerHTML = '<div class="" id=""><br></div>';
    
    

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
            // Find the parent element (a line) of the startContainer
            const currentLine = startContainer.nodeType === Node.TEXT_NODE ? startContainer.parentElement : startContainer;

            // Remove previous highlight from all lines
            const highlightedLines = document.querySelectorAll('.line-highlight');
            highlightedLines.forEach((line) => {
                line.classList.remove('line-highlight');
            });

            // Add highlight to the current line
            currentLine.classList.add('line-highlight');
        }
        // Deal with line numbers
        const numb = editor.children.length;

        console.log(numb);

        if ((numb !== lineCount.childElementCount) || (numb === 1 && e.key === 'Enter')) {
            if ((lineCount.childElementCount > 1 && e.key !== 'Enter') || (lineCount.childElementCount < numb)) {
                lineCount.innerHTML = "";
            }
            var setbacks = 0;
            for (let i = 1; i <= numb; i++) {
                    const line = document.createElement("div");
                    line.id = "line";
                    line.textContent = String(i-setbacks);
                    lineCount.appendChild(line);
            }
        }
    }

    const readmeTextboxContainerX = document.getElementById('readmeTextboxContainerx');


    const readmeTextbox = document.getElementById("readmeTextbox");
    const lc = document.getElementById("linecount");

    readmeTextbox.addEventListener("input", function () {
        // Update the height of readmeTextbox to match its scrollHeight
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    
        var divs = this.getElementsByTagName('div');
        let totalProcessedCharacters = 0;
    
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].innerText.trim() !== '') {
                // Save the caret position before making changes
                savedCaretPosition = saveCaretPosition();
    
                var words = divs[i].innerText.split(/(\s+)/);
                var formattedWords = words.map(function(word) {
                    if (['def', 'return', 'if'].includes(word.trim())) {
                        return '<span style="color: #FF79C8;">' + word + '</span>';
                    } else {
                        return word;
                    }
                });
    
                // Update only the innerHTML of the current div
                divs[i].innerHTML = formattedWords.join('');
    
                // Restore the caret position after making changes
                restoreCaretPosition(savedCaretPosition);
    
                // Count the processed characters for the current line
                if (i === range.startContainer.parentNode.lineNumber) {
                    totalProcessedCharacters += range.startOffset;
                } else {
                    totalProcessedCharacters += divs[i].innerText.length;
                }
            }
        }
    });
      


    
});

const saveCaretPosition = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        return {
            container: range.startContainer,
            offset: range.startOffset
        };
    }
};

const restoreCaretPosition = (position) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(position.container, position.offset);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
};

function toggleProjects() {
    var projectsDropdown = document.querySelector('.projects');
    var projectsButton = document.querySelector('.arrow-icon');

    if (projectsDropdown.classList.contains('active')) {
        projectsDropdown.style.maxHeight = '0';
        projectsDropdown.classList.remove('active');
        projectsButton.style.transform = 'rotate(0deg)';
    } else {
        projectsDropdown.style.maxHeight = projectsDropdown.scrollHeight + 'px';
        projectsDropdown.classList.add('active');
        projectsButton.style.transform = 'rotate(90deg)';
    }
}

function toggleEngl() {
    var projectsDropdown = document.querySelector('.english');
    var projectsButton = document.querySelector('.earrow-icon');

    if (projectsDropdown.classList.contains('active')) {
        projectsDropdown.style.maxHeight = '0';
        projectsDropdown.classList.remove('active');
        projectsButton.style.transform = 'rotate(0deg)';
    } else {
        projectsDropdown.style.maxHeight = projectsDropdown.scrollHeight + 'px';
        projectsDropdown.classList.add('active');
        projectsButton.style.transform = 'rotate(90deg)';
    }
}
