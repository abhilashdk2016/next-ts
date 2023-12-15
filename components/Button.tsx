import { FC } from "react";

interface PrimaryButtonProps {
    type: 'primary';
    label: string;
}

interface SecondaryButtonProps {
    type: 'secondary';
    label: string;
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

// Type predicate function
const isPrimaryButtonProps = (props: ButtonProps): props is PrimaryButtonProps => {
    return props.type === 'primary';
}

export const primaryButtonProps: PrimaryButtonProps = {
    type: 'primary',
    label: 'Primary Button'
}

export const secondaryButtonProps: SecondaryButtonProps = {
    type: 'secondary',
    label: 'Secondary Button'
}

const Button: FC<ButtonProps> = (props) => {
    if(isPrimaryButtonProps(props)) {
        return <button style={{ backgroundColor: 'blue', color: 'white' }}>
            {props.label}
        </button>
    } else {
        return <button style={{ backgroundColor: 'yellow', color: 'black' }}>
            {props.label}
        </button>
    }
}

export default Button