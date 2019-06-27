class HTMLEscape {
    static LEFT_ANGLE_BRACKET = '<';
    static RIGHT_ANGLE_BRACKET = '>';

    static escapeString(htmlString) {
        return htmlString
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    static calculatePreWhitespace(line) {
        return line.search(/\S|$/);
    }

    static getDesignatedElements() {
        return document.getElementsByClassName('html-escaped-code-block');
    }

    static splitHTMLStringArray(value) {
        return value.split(/\r\n|\r|\n/);
    }

    static determineFirstMarkupLine(HTMLStringArray) {
        for (let index = 0; index < HTMLStringArray.length; index++) {
            if (HTMLStringArray[index].includes(HTMLEscape.LEFT_ANGLE_BRACKET)) {
                return index;
            }
        }
        return -1;
    }

    static makeEscapedHTML(splitString, whitespaceIndex) {
        let escapedHTML = [];
        for (let i = 0; i < splitString.length; i++) {
            let escapedNodeString = HTMLEscape.escapeString(splitString[i]);
            escapedHTML.push(escapedNodeString.slice(whitespaceIndex, escapedNodeString.length));
        }
        return escapedHTML;
    }

    static updateNodeInnerHTML(element, innerHTML) {
        element.innerHTML = innerHTML;
    }

    static do() {
        let elements = HTMLEscape.getDesignatedElements();
        for (let index = 0; index < elements.length; index++) {
            let splitString = HTMLEscape.splitHTMLStringArray(elements[index].innerHTML);
            let firstMarkupLine = HTMLEscape.determineFirstMarkupLine(elements[index]);
            let leadingWhitespaceEndIndex = HTMLEscape.calculatePreWhitespace(firstMarkupLine);
            HTMLEscape.updateNodeInnerHTML(HTMLEscape.makeEscapedHTML(splitString, leadingWhitespaceEndIndex));
        }
    }
}

export default HTMLEscape;
