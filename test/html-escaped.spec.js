import HTMLEscape from '../src/html-escape';

describe('HTMLEscaped', () => {
    it('escape string with angled brackets', () => {
        let testValue = '<test>';
        HTMLEscape.escapeString(testValue);
        expect(HTMLEscape.escapeString(testValue)).toBe('&lt;test&gt;');
    });

    it('should calculate the amount of whitespace before the first node', () => {
        let testNode = '        <form>some data</form>';
        let preSpace = 8;
        expect(HTMLEscape.calculatePreWhitespace(testNode)).toBe(preSpace);
    });

    it('should extract the html elements designated for escaping', () => {
        let dummyDomTree = document.createElement('div');
        let testCount = 5;

        let dummyDiv = document.createElement('div');
        dummyDiv.className = 'html-escaped-code-block';

        for (let i = 0; i < testCount; i++) {
            let dummyDiv = document.createElement('div');
            dummyDiv.className = 'html-escaped-code-block';
            dummyDomTree.appendChild(dummyDiv);
        }
        document.body.appendChild(dummyDomTree);
        let elements = HTMLEscape.getDesignatedElements();
        expect(elements.length).toBe(testCount);
        expect(elements[0]).toEqual(dummyDiv);
        expect(elements[1]).toEqual(dummyDiv);
        expect(elements[2]).toEqual(dummyDiv);
        expect(elements[3]).toEqual(dummyDiv);
        expect(elements[4]).toEqual(dummyDiv);
    });

    it('should determine the first valid markup line', () => {
        let stringArray = [
            '   ',
            '   ',
            '   <div>',
            '       <div></div>',
            '   </div>'
        ];

        let response = HTMLEscape.determineFirstMarkupLine(stringArray);
        expect(response).toBe(2);
    });

    it('should make escaped HTML from split strings and whitespace index', () => {
        let testStringInput = [
            '   ',
            '   ',
            '   <div>',
            '       <div></div>',
            '   </div>'
        ];
        // Include left trimmed whitespace to ws index
        let expectedResponse = ['', '', 'lt;div&gt;', '   &lt;div&gt;&lt;/div&gt;', 'lt;/div&gt;'];
        let response = HTMLEscape.makeEscapedHTML(testStringInput, 4);
        expect(response).toEqual(expectedResponse);
    });

    it('should updated an elements innerHTML property', () => {
        let dummyNode = document.createElement('div');
        let appendValue = 'test value';
        HTMLEscape.updateNodeInnerHTML(dummyNode, appendValue);
        expect(dummyNode.innerHTML).toEqual(appendValue);
    });
});
