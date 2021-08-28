interface TOptions {
    locale: string;
    firstDayIsMonday: boolean;
}
interface TReturn {
    weekdays: string[];
    months: string[];
}
export declare const capitalize: (word: string) => string;
export declare const getLocalizedNames: (options: TOptions) => TReturn;
export {};
