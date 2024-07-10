export interface DateTimePickerData {
    nameComponent: string;
    configuration: Configuration;
}

export interface Configuration {
    id: number;
    date_old: Date;
    date_new: Date;
    hour_old: number
    hour_new: number;
    minute_old: number;
    minute_new: number;
    status: 'Date' | 'Time' | 'DateTime' | 'Date-Date' | 'Time-Time';
}

export interface SelectedElement {
    nameComponent: string;
    configuration: Configuration;
}
