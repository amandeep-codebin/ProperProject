import {TextStyle, ViewStyle} from "react-native";

export interface ProductType {
    id:string ,
    title: string,
    desc?: string,
    price : number
    discount? : number,
    image ?: string,
    category? : string
}

export interface AddProductType extends Omit<ProductType, 'id'> {} // productType me se id ko chodd ke sab dedo

export interface ButtonType {
    text: string,
    buttonstyles?: ViewStyle ,
    variant?: string,
    onPress:() => void,
    textStyles?: TextStyle,
    disabled?: boolean ,
    block?: boolean,
}

export enum BUTTON_TYPES {
    'Primary'= "primary",
    'Secondary'="secondary",
    'Outline'= "outline",
    'Link'="link",
}

export interface IconType {
    name: string,
    color?: string
    size?:number
}

export interface TypographyType {
    variant?: string,
    centered?: boolean,
    children: string,
    style?: TextStyle
}

export interface InitialProductStateType {
    products : ProductType[],
    siglep:ProductType[],
    loading: boolean,
    error: string
}

export interface CartType{
    id: string,
    UserId: string,
    products: cartProductType[],
}

export interface InitialCartStateType {
    carts: CartType,
    loading:boolean,
    error:string,
    currentCartId: string,
}
 export interface cartProductType {
    products: any;
    ProdId: string,
    price: number
 }