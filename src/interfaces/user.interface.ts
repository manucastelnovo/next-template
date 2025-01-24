export interface User {
    id:          number;
    firstName:   string;
    lastName:    string;
    fullName:    string;
    slug:        string;
    email:       string;
    phoneNumber: string;
    role:        string;
    status:      string;
    createdAt:   Date;
    updatedAt:   Date;
    deletedAt:   null;
    catalog:     Catalog;
    profile:     Profile;
}

export interface Catalog {
    id:        number;
    createdAt: Date;
    status:    string;
    updatedAt: Date;
    deletedAt: null;
}

export interface Profile {
    id:        number;
    url:       string;
    createdAt: Date;
    fileType:  string;
    updatedAt: Date;
    deletedAt: null;
}