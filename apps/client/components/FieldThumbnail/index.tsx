// import { Box } from '@mui/material';
// import Image from 'next/image';
// import React from 'react';
// import { IoMdCloseCircle } from 'react-icons/io';
// import { MdOutlineOpenInFull } from 'react-icons/md';

// import useConfirmationDialog from '@/hooks/useConfirmDialog';

// interface imageTypes {
//   data?: string | File;
//   handleDelete?: () => void;
//   isClose?: boolean;
//   title?: string;
// }

// const ImageDiv = ({ data, handleDelete, isClose, title }: imageTypes) => {
//   // ? hooks
//   const dialog = useConfirmationDialog();

//   return (
//     <>
//       <div className='image-title'> {title} </div>
//       <div className='image-container'>
//         <div className='img-cont'>
//           {data && (
//             <Image
//               src={
//                 dataSrc?.endsWith('.pdf')
//                   ? 'https://api.aqaryservices.com/upload/document-icon.png'
//                   : (dataSrc as string)
//               }
//               fill
//               alt={dataAlt ?? 'Aqary image'}
//               sizes='36px'
//             />
//           )}
//           <div
//             className='full-view-icon'
//             onClick={() =>
//               dialog.openConfirmDialog({
//                 content: (
//                   <Box className='cell-media-dialog'>
//                     {data && (
//                       <Image
//                         src={
//                           dataSrc?.endsWith('.pdf')
//                             ? 'https://api.aqaryservices.com/upload/document-icon.png'
//                             : (dataSrc as string)
//                         }
//                         alt={dataAlt ?? 'Aqary image'}
//                         fill
//                         sizes='500px'
//                         priority={true}
//                       />
//                     )}
//                   </Box>
//                 ),
//                 hideCancelButton: true,
//                 hideConfirmButton: true,
//                 dialogPaperProps: {
//                   sx: {
//                     width: '100%',
//                     maxWidth: '800px',
//                   },
//                 },
//               })
//             }
//           >
//             <MdOutlineOpenInFull />
//           </div>
//         </div>
//         <p>{dataAlt}</p>
//         {!isClose && (
//           <div className='close-icon' onClick={handleDelete && handleDelete}>
//             <IoMdCloseCircle color='red' />
//           </div>
//         )}
//       </div>

//       {dialog.renderConfirmationDialog()}
//     </>
//   );
// };

// export default ImageDiv;

import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdOutlineOpenInFull } from 'react-icons/md';

import useConfirmationDialog from '@/hooks/useConfirmDialog';

interface imageTypes {
  data?: string | string[] | File | File[];
  handleDelete?: (item: string | File) => void;
}

const FieldThumbnail = ({ data, handleDelete }: imageTypes) => {
  // ? hooks
  const dialog = useConfirmationDialog();

  const renderImage = (src: string, alt: string) => {
    return (
      <Image
        src={
          src.endsWith('.pdf')
            ? 'https://api.aqaryservices.com/upload/document-icon.png'
            : src
        }
        fill
        alt={alt ?? 'Aqary image'}
        sizes='36px'
      />
    );
  };

  const renderFullViewImage = (src: string, alt: string) => (
    <Image
      src={
        src.endsWith('.pdf')
          ? 'https://api.aqaryservices.com/upload/document-icon.png'
          : src
      }
      alt={alt ?? 'Aqary image'}
      fill
      sizes='500px'
      priority={true}
    />
  );

  const getSrc = (item: string | File) => {
    return typeof item === 'string' ? item : URL.createObjectURL(item);
  };

  const getImageName = (item: string | File): string => {
    if (typeof item === 'string') {
      return item.split('/').pop() ?? 'Aqary image';
    }
    return item.name;
  };

  const imageData = Array.isArray(data) ? data : data ? [data] : [];

  return (
    <>
      <div className='field-thumbnail'>
        {imageData.map((item, idx) => (
          <div className='item' key={idx}>
            <div className='image-container'>
              {renderImage(getSrc(item), getImageName(item))}
              <div
                className='full-view-icon'
                onClick={() =>
                  dialog.openConfirmDialog({
                    content: (
                      <Box className='cell-media-dialog'>
                        {renderFullViewImage(getSrc(item), getImageName(item))}
                      </Box>
                    ),
                    hideCancelButton: true,
                    hideConfirmButton: true,
                    dialogPaperProps: {
                      sx: {
                        width: '100%',
                        maxWidth: '800px',
                      },
                    },
                  })
                }
              >
                <MdOutlineOpenInFull />
              </div>
            </div>
            <div className='image-title'>{getImageName(item)}</div>
            {handleDelete && (
              <div className='close-icon' onClick={() => handleDelete(item)}>
                <IoMdCloseCircle color='red' />
              </div>
            )}
          </div>
        ))}
      </div>
      {dialog.renderConfirmationDialog()}
    </>
  );
};

export default FieldThumbnail;
