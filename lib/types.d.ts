/**
 * @typedef TestingTypes
 * 
 * @author @adamlogan17
 * 
 * Represents an object with two properties.
 * 
 * @property {string} text - a string that could represent any text value.
 * @property {number} age - a number that could represent the age of a person or entity.
 */
type TestingTypes = {
	text: string;
	age: number;
};

/**
 * @typedef LiveReactEditorProps
 * 
 * @author @adamlogan17
 * 
 * Represents the props accepted by the LiveReactEditor component.
 * 
 * @property {string} code - a string that represents the code to be displayed in the live editor.
 * @property {Record<string, any>} scope - a component (or components) that can be used within the live editor, all default components are available.
 * @property {string} [borderColor] - an optional string that represents the border color of the live editor.
 * @property {number} [borderSize] - an optional number that represents the border size of the live editor.
 * @property {number} [mediaBreakpoint] - an optional number that represents the breakpoint at which the live editor's layout changes.
 */
type LiveReactEditorProps = {
	code: string;
	scope: Record<string, any>;
  borderColor?: string;
  borderSize?: number;
  mediaBreakpoint?: number;
};