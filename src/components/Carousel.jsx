import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className='flex'>
        <div className='max-w-lg shrink self-end'>
          <img className='rounded-2xl' src={images[active]} alt='animal hero' />
        </div>
        <div className='ml-4 shrink flex-col self-end overflow-y-scroll'>
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={`mt-5 max-h-20 cursor-pointer rounded-full ${
                index === active ? 'active' : ''
              }`}
              alt='animal thumbnail'
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
