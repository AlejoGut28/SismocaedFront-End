import {Trabajador} from './trabajador'
import {Postulante} from './postulante'


export class Doc_aprobado{
    public iddoc_aprobado:number
    public codigoap: string
    public fecha: string
    public doc_curriculum_vitae: string
    public doc_certificado_salud: string
    public doc_antecedentes_policiales: string
    public doc_copia_pass: string
    public doc_copia_dni:string
    public idtrabajador: Trabajador
    public idpostulante: Postulante
}