
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions'
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend-list/Friend-list';
import { TransactionHistory } from './Transaction-history/Transaction-history';
import { GlobalStyles } from './GlobalStyles';



export const App = () => {
  return (
    <div>
       <GlobalStyles />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
