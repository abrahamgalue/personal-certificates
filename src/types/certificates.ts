export interface Certificates {
  certificates: Certificate[]
}

export interface Certificate {
  id: string
  name: string
  institution: Institution
  date: ISODateString
  type: string
  tags: string[]
  filename: string
  description: string
}

export interface CertificateCard extends Omit<Certificate, 'id' | 'filename'> {
  pdfPath: string
  imagePath: string
}

export type Institution = 'Platzi' | 'Vercel' | string

export type ISODateString = `${number}-${number}-${number}`
