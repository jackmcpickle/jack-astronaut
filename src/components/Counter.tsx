import { createSignal } from 'solid-js';
import type { JSX } from 'solid-js';

type Props = {
    children?: JSX.Element;
};

export function Counter(props: Props): JSX.Element {
    const [count, setCount] = createSignal(0);
    const add = () => setCount(count() + 1);
    const subtract = () => setCount(count() - 1);

    return (
        <>
            <div class='grid text-xl grid-cols-3 gap-3 place-items-center mt-12'>
                <button onClick={subtract}>-</button>
                <pre>{count()}</pre>
                <button onClick={add}>+</button>
            </div>
            <div class='text-center'>{props.children}</div>
        </>
    );
}
