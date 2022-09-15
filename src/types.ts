export interface IUseStateManager{
    forgetAboutItItems : string[]; 
    setForgetAboutItItems : React.Dispatch<React.SetStateAction<string[]>>;
}