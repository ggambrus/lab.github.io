function replaceLinksWithIcons(text) {
            const regex = /\[@(.*?)\|(.*?)\]/g;
            return text.replace(regex, (match, p1, p2) => {
                return `<nobr><a class = \"internal-link\" href="${p2}" target="_blank"><i class="fas fa-user link-icon"></i>${p1}</a></nobr>`;
            });
        }
		
function replaceRevealText(text) {
    const regex = /\[\*(.*?)\|(.*?)\]/g;
    return text.replace(regex, (match, clickableText, charCodes) => {
        // Parse the comma-separated character codes and convert to a string
        const chars = charCodes.split(',').map(code => String.fromCharCode(code)).join('');

        // Create the HTML structure for the clickable text and hidden content
        const revealHtml = `
            <nobr>
                <span class="reveal-text" style="cursor:pointer; color:#31a354; text-decoration:none;" onclick="this.nextElementSibling.style.display='inline'; this.style.display='none';">
                    ${clickableText}
                </span>
                <span class="hidden-text" style="display:none;">
                    ${chars}
                </span>
            </nobr>`;
        
        return revealHtml;
    });
}		