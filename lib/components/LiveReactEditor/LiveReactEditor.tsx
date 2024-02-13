import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

type LiveReactEditorProps = {
	code: string;
	scope: Record<string, any>;
};

export default function LiveReactEditor(props: LiveReactEditorProps) {
	return (
		<LiveProvider code={props.code} scope={props.scope}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
		</LiveProvider>
	);
}
