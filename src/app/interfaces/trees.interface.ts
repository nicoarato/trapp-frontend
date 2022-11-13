/* eslint-disable @typescript-eslint/naming-convention */
interface User {
    username: string;
    id: string;
}

export interface Tree {
    coordenadas: number[];
    direccion: string;
    name: string;
    zip_code: string;
    tree_id: string;
    version: string;
    user: User;
    phone: string;
    fecha_inicio_relevamiento: string;
    fecha_fin_relevamiento: string;
    fecha_update: string;
    id: string;
}
