import { authOptions } from '@/helpers/authOptions';
import { getServerSession } from 'next-auth';

const DashboardHome = () => {
  const session = getServerSession(authOptions);
  return (
    <div>
      <h1>Welcome, {} </h1>
    </div>
  );
};

export default DashboardHome;
