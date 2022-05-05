import Trigger from "../inc/Trigger";

interface ButtonOptions {
	name: string;
	class?: string;
	style?: string;
}

interface Advacned {
	enterDuration: number;
	exitDuration: number;
	vDistance: number;
	hDistance: number;
	onClick: () => void | null;
	buttons: {
		options: string[] | ButtonOptions[];
		callBack: (toast: Trigger) => void;
		position: 'in_title' | 'in_body';
	} | null;
}

export default Advacned;
