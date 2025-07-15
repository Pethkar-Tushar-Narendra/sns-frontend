import { useState, useContext } from 'react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]
const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/admin/login', { email, password });
      login(res.data.token);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    // <form onSubmit={handleLogin}>
    //   <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    //   <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
    //   <button type="submit">Login</button>
    // </form>
    // <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    //       <div className="lg:pt-4 lg:pr-8">
    //         <div className="lg:max-w-lg">
    //           <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster</h2>
    //           <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
    //             A better workflow
    //           </p>
    //           <p className="mt-6 text-lg/8 text-gray-300">
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
    //             iste dolor cupiditate blanditiis ratione.
    //           </p>
    //  <form onSubmit={handleLogin}>
    //           <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
    //             {/* {features.map((feature) => ( */}
                       
    //               <div 
    //             //   key={feature.name}
    //                className="relative pl-9">
             
    //                 <dt className="inline font-semibold text-white">
    //                   {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
    //                   {feature.name} */}
    //                 </dt>{' '}
    //                 <dd className="inline">
    //    <input
    //    id="email-address"
    //             name="email"
    //             type="email"
    //             required
    //             placeholder="Enter your email"
    //             autoComplete="email"
    //             className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
    //            onChange={(e) => setEmail(e.target.value)} /></dd>
    //               </div>
    //               <div 
    //             //   key={feature.name}
    //                className="relative pl-9">
             
    //                 <dt className="inline font-semibold text-white">
    //                   {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
    //                   {feature.name} */}
    //                 </dt>{' '}
    //                 <dd className="inline">
    //    <input
    //    id="password"
    //             name="password"
    //             type="password"
    //             required
    //             placeholder="Enter your password"
    //             autoComplete="password"
    //             className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
    //           onChange={(e) => setPassword(e.target.value)} />
    //    </dd>
    //               </div>
    //               <div 
    //             //   key={feature.name}
    //                className="relative pl-9">
             
    //                 <dt className="inline font-semibold text-white">
    //                   {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
    //                   {feature.name} */}
    //                 </dt>{' '}
    //                 <dd className="inline"><button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    //          >Login</button></dd>
    //               </div>
    //             {/* ))} */}
    //           </dl>
    // </form>
    //         </div>
    //       </div>
    //       <img
    //         alt="Product screenshot"
    //         src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
    //         width={2432}
    //         height={1442}
    //         className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className='flex items-center justify-center bg-gray-100' style={{ minHeight: '100vh' }}>
        
    <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>
        </div>

        <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form onSubmit={handleLogin}>
            <div class="w-full mt-4">
                <input onChange={(e) => setEmail(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div class="w-full mt-4">
                <input onChange={(e) => setPassword(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div class="flex items-center justify-between mt-4">
                <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                <button type='submit' class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
    </div>
</div>
    </div>
  );
};

export default Login;
