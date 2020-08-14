-- Create tables

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users(user_id)
);

-- Change password datatype on users
-- ALTER TABLE users
-- ALTER COLUMN password TYPE TEXT;


-- Insert dummy data
INSERT INTO users (
    username,
    password,
    profile_pic
)
VALUES 
('CrazyDiamond', 'GatesOfDawn', 'https://rocknrollroutemaster.files.wordpress.com/2016/07/syd-barrett-mojo.jpg?w=640'),
('WishYouWereHere', 'Seamus17', 'https://i.pinimg.com/originals/b3/87/78/b3877896f4fcf25740984be1046fb48e.jpg'),
('InTheFlesh82', 'BassYaFace', 'https://i.pinimg.com/736x/a7/96/23/a796237d6be619ac796814b0081057ca.jpg'),
('OneOfTheseDays', 'DrummerBoy', 'https://img.discogs.com/XRdatsDrY23KtfXOxTFxkuvmDro=/394x500/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-246097-1345122151-3979.jpeg.jpg');

INSERT INTO posts (
    title,
    img,
    content,
    author_id
)
VALUES
('So happy rn', 'none', 'Wow so much happy', '1'),
('Fun times', 'none', 'Such much fun', '1'),
('Remember when you were young?', 'none', 'You shone like the sun', '3'),
('Now there''s a look in your eyes', 'none', 'Like black holes in the sky', '3'),
('You gotta be crazy', 'none', 'You gotta have a real need', '4'),
('Gotta sleep on your toes', 'none', 'When you''re on the street', '4'),
('On the turning away', 'none', 'from the pain and downtrodden', '2'),
('Don''t accept that what''s happening', 'none', 'Is just a case of others'' suffering', '2');
