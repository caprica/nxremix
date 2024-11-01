import { MyLib } from '@nxremix/libs/my-lib';
import NxWelcome from '../nx-welcome';

export default function Index() {
  return (
    <div>
      <MyLib />
      <NxWelcome title={'my-remix-app'} />
    </div>
  );
}
