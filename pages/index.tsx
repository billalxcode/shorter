import Head from "next/head"
import Header from "@/components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"

export default function Home() {
  let [storage, setStorage] = useState([])
  let [userInput, setUserInput] = useState('')

  const getLocalStorage = () => {
    let data = localStorage.getItem('urls')
    let obj = JSON.parse(data)
    return obj
  }

  const base_path = () => {
    let item = process.env.SHORTER_BASE_PATH
    console.log(item)
    if (item == null) {
      item = "http://localhost:3000"
    }
    return item
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let key = Math.floor(Math.random() * (9999 - 1)) + 1
    let old_data = getLocalStorage()
    if (old_data == null) {
      old_data = []
    }
    old_data.push(
      {
        key: key,
        value: userInput
      }
    )

    localStorage.setItem('urls', JSON.stringify(old_data))
    setUserInput("")
  }

  useEffect(() => {
    let item = getLocalStorage()
    if (item != null) {
      setStorage(item)
    }
  }, [storage])

  return (
    <div className="lg:max-w-screen-md m-auto h-screen relative">
      <Head>
        <title>URL Shoter</title>
        <meta property="og.title" content="URL Shoter" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Header></Header>

      <div className="relative flex flex-col">
        <h1 className="text-center font-bold brand-name">
          URL SHORTER
        </h1>
        <form className="form-control w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text">Long URL: </span>
          </label>
          <div className="input-group">
            <input type="text" placeholder="Type here" className="input input-bordered w-full" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </button>
          </div>
        </form>

        <div className="overflow-x-auto">
          <table className="table w-full max-w-xl mx-auto mt-3">
            {/* head */}
            <thead>
              <tr>
                <th>Key</th>
                <th>Original</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { storage.map((data, index) => {
                return (
                  <>
                    <tr>
                      <td>{data.key}</td>
                      <td>{data.value}</td>
                      <td>
                        <a href={ '/v/' + data.key }>Visit</a>
                        <span className="px-2">|</span>
                        <a href="#" onClick={ (e) => navigator.clipboard.writeText(base_path() + '/v/' + data.key)} data-url={ '/v/' + data.key }>Copy</a>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center my-3">
        Created by <a href="https://instagram.com/billalxcode_" className="text-info">@billalxcode_</a> with NextJS
      </div>
    </div>
  )
}

