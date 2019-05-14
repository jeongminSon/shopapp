import * as React from 'react'
import { getSelectiveDatas } from 'common/services/naverSelective'
import { Card } from 'antd'

const { Meta } = Card

interface OwnState {
  selectiveData: Object
}

class NaverSelective extends React.Component<any, OwnState> {
  constructor(props) {
    super(props)
    this.state = { selectiveData: {} }
  }

  async componentDidMount() {
    await this.setData()
  }

  async componentDidUpdate() {
    await this.setData()
  }

  setData = async () => {
    const selectiveData = await getSelectiveDatas()
    if (selectiveData) {
      this.setState({ selectiveData })
    }
  }

  render() {
    const listData = this.state.selectiveData && this.state.selectiveData['list']
    return (
      <div>
        {listData &&
          listData.map((data, index) => {
            if (!data.representImagePathForWest) return
            return (
              <Card
                hoverable
                style={{ width: '90%', marginBottom: '10px' }}
                cover={<img alt={data.urlId} src={data.representImagePathForWest} />}
                key={`selective_data_${index}`}
              >
                <Meta title={data.urlId} description="NAVER Selective Item" />
              </Card>
            )
          })}
      </div>
    )
  }
}

export default NaverSelective
