export interface MailMetaDataInterface {
    id: string;
    from: From;
    date: number;
    subject: string;
    short_description: string;
    isFavorite?: boolean;
    isRead?: boolean;
}

interface From {
    email: string;
    name: string;
}
