import { TwitterFollowCard } from './components/TwitterFollowCard'

export const App: React.FC = () => {
  interface User {
    userName: string
    name: string
    isFollowing: boolean
  }
  const users: User[] = [
    {
      userName: 'imrlopezag',
      name: 'Angel Lopez',
      isFollowing: true
    },
    {
      userName: 'midudev',
      name: 'Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'AxelFarina',
      name: 'Axel Farina',
      isFollowing: false
    },
    {
      userName: 'xFariasRDx',
      name: 'Miguel Farias',
      isFollowing: true
    },
    {
      userName: 'githubnext',
      name: 'GitHub Next',
      isFollowing: false
    }
  ]
  return (
    <section className='App w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <h1 className='text-2xl font-bold text-gray-800 dark:text-white'>
        Twitter Follow Card
      </h1>
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          name={user.name}
          isFallowing={user.isFollowing}
        />
      ))}
    </section>
  )
}
