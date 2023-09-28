import axios from 'axios'

export class Requests {
  private readonly APIKEY: string =
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4ApCc39QB+PYvlG2bWaO3Xjkdj89xSRKVGDHMtcxpX9QvrPB8LRI5UlK5pJiMUiaGuttvuYBQ7C/yAoSJgoxZUgaEYIdL+UmgwUH7vODyV/Eo+A4sZua984pO3wWDvWIkzMhblQDf+GjAFoOhUnNQEGgDU8IJrCaDF0usg7+/sY5PcGbnFBthwIYYOnLibgsvMFfuUpoXxgmMRFMBsMTSAsAwnWqfHrSvOCzVSxbEN25jHyLmbJjw4NUHPgl7K5Aez2Tl/Id4kClrgkguaf8BQGzt87BA5l4qs5zbgh8EbVuzKgngAGJrytESUqBS7pgRAv/OPSIlrEPyjjS5w3tBwIDAQAB'

  private readonly url: string = 'http://localhost:3001/api/'

  public async register(payload: object): Promise<number> {
    const response = await axios.post(`${this.url}register-user/email`, payload, { headers: { 'x-public-key': this.APIKEY } })
    return response.status
  }

  public async login(payload: object): Promise<{ data: string; status: number }> {
    const response = await axios.post(`${this.url}login-user/email?expirationTime=1d`, payload, { headers: { 'x-public-key': this.APIKEY } })
    return { data: response.data, status: response.status }
  }

  public async getCoursesData(): Promise<any> {
    const response = await axios.get(`https://l95c1m74-3002.use2.devtunnels.ms/`)
    return response.data
  }
}
