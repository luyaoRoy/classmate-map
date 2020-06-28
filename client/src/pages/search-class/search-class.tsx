import { View, Text } from '@tarojs/components'
import Search from '@/components/Search'
import ClassItem from '@/components/ClassItem';

import { NavBar } from 'taro-navigationbar'

import './search-class.scss'

function SearchClass() {
  const bindOnSearch = async (e) => {
    const { value } = e.detail;
    // 调用查询函数
    const res = await Taro.cloud.callFunction({
      name: 'class',
      data: {
        $url:"search",
        queryData:{
          token: value
        }
      }
    })
    console.log(res);
  }
  return (
    <View className='search-class'>
      <View className='page_search'>
        <NavBar
          title='搜索班级'
          back />
        <View className='search_wrap'>
          <Search hint='输入口令加入班级' onSearch={bindOnSearch} />
        </View>
        <View className='search_result'>
          <Text className='title'>为你找到</Text>
          <ClassItem
            classname={'麻豆幼稚园小（2）班'}
            totalNum={30}
            joinNum={17}
            coverImage={'https://mayandev.oss-cn-hangzhou.aliyuncs.com/blog/join_item.jpg'}
            isJoin={false}
          />
        </View>

      </View>
    </View>
  )
}

export default SearchClass