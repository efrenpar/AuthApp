export interface AuthResponse{
    ok: boolean,
    msg?: string,
    uid?: string,
    name?: string,
    token?: string,
    newToken?:string
}

export interface Usuario{
    uid:string,
    name:string,
}