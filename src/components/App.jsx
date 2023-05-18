import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import user from '../data/user';

import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile.jsx';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/Transactions';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
