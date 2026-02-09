import { useEffect, type RefObject } from "react";
type Props = {
    ref: RefObject<HTMLDivElement | null>
    handler: () => void,
    buttonRef: RefObject<HTMLButtonElement | null>
};
export default function useOutsideClick({ handler, ref, buttonRef }: Props) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (buttonRef.current?.contains(event.target as Node)) {
                handler()
                return;
            }
            if (ref.current?.contains(event.target as Node)) {
                return;
            }

            handler()
        }
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)
        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref, handler])
}
