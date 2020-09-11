let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response)
      // JSON.parse()将符合JSON语法的字符串转换成JS对应类型(这里是转换成对象)
      const array = JSON.parse(object)
      myName.textContent = object.name
    }
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onload = () => {
    // 创建 div 标签
    const div = document.createElement('div')
    // 填写 div 内容
    div.innerHTML = request.response
    // 插入到 body 里
    document.body.appendChild(div)
  }
  request.onerror = () => {}
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {
    // 创建 script 标签
    const script = document.createElement('script')
    // 填写 script 内容
    script.innerHTML = request.response
    // 将 script 标签插入到 body 里
    document.body.appendChild(script)
  }
  request.onerror = () => {}
  request.send()
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) {
      // 下载完成但不知道是成功 2xx 还是失败 4xx 5xx
      if (request.status >= 200 && request.status < 300) {
        console.log('加载完成')
        // 创建 style 标签
        const style = document.createElement('style')
        // 填写 style 内容
        style.innerHTML = request.response
        // 插入到 head 里面
        document.head.appendChild(style)
      } else {
        alert('加载 CSS 失败')
      }
    }
  }
  request.send()
}
