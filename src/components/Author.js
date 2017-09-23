import React from 'react';

const Author = ({ author }) => {
  return (
    <div className="post-list">
      <table>
        <tbody>
          <tr>
            <td>user:</td>
            <td>
              {author.id}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Author;
