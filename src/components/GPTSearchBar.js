import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    return (
        <div className='pt-[10%] flex justify-center '>
            <form className='p-4 bg-black rounded-lg shadow-2xl shadow-red-700 grid grid-cols-12'>
                <input type='text'
                    className='p-4 m-4 bg-white text-black col-span-9 rounded-lg'
                    placeholder={lang[langKey].gptSearchPlaceholder} />

                <button className='bg-red-700 p-4 m-4 col-span-3 rounded-lg'>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar;