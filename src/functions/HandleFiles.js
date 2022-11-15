import {useEffect, setData} from 'react';

function HandleFiles(files) {    
    //* useEffect 시작  *//
    useEffect(()=>{ 

    },[])
    //* useEffect 종료 *//

    const onClick = async () => {
        try{ /*
          const response = await axios.get(
            'http://127.0.0.1:8000/test/test01data/Cheolwon',
          );
          setData(response.data); */  //응답을 받는다
        } catch (e) {
          console.log(e)
        }
      };    
}

export default HandleFiles;