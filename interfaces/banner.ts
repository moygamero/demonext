export interface Banner {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    imagen:      Imagen;
}

export interface Imagen {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata?: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Large;
    large?:    Large;
    medium:    Large;
    small:     Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path?:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
