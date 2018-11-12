import { IResponsesObject } from './requests';
import * as multer from 'multer';
const upload = multer({ dest: 'mock_server/uploads/' });

let files = [];
export class MockMethods {
  public static getMockMethods(
    app,
    responses: IResponsesObject,
    apiPath: string
  ) {
    /**
     *
     */
    app.get(apiPath + '/demo/demoEndPoint', (req: Request, res: any) => {
      res.set({
        'Content-Type': 'application/json'
      });
      res.send(responses.getDemoDemoEndPoint(req, res));
    });
    /**
     *
     */
    app.get(apiPath + '/demo/PetrEndPoint', (req: Request, res: any) => {
      res.set({
        'Content-Type': 'application/json'
      });
      res.send(responses.getDemoPetrEndPoint(req, res));
    });
  }
}
