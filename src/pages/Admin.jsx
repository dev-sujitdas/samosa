import React, { useState, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { Link } from 'react-router-dom';

const Admin = () => {
    const { games, addGame, updateGame, deleteGame } = useContext(GameContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        type: 'Base', // Default based on gameData
        difficulty: 'Easy',
        duration: '<30',
        players: '', // Will split by comma to array
        icon: '', // Direct URL or path
        default: '/game-icons/default.webp',
        tags: '' // Will split by comma
    });

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple passcode for demonstration - "admin123"
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Process players and tags
        const playersArray = formData.players.split(',').map(p => {
            const num = parseInt(p.trim());
            return isNaN(num) ? p.trim() : num;
        });
        const tagsArray = formData.tags ? formData.tags.split(',').map(t => t.trim()) : [];

        const gamePayload = {
            ...formData,
            players: playersArray,
            tags: tagsArray
        };

        if (editingIndex !== null) {
            updateGame(gamePayload, editingIndex);
            setEditingIndex(null);
        } else {
            addGame(gamePayload);
        }

        // Reset form
        setFormData({
            name: '',
            type: 'Base',
            difficulty: 'Easy',
            duration: '<30',
            players: '',
            icon: '',
            default: '/game-icons/default.webp',
            tags: ''
        });
    };

    const handleEdit = (index) => {
        const game = games[index];
        setFormData({
            ...game,
            players: game.players.join(', '),
            tags: game.tags ? game.tags.join(', ') : ''
        });
        setEditingIndex(index);
        window.scrollTo(0, 0);
    };

    const handleDelete = (index) => {
        if (window.confirm('Are you sure you want to delete this game?')) {
            deleteGame(index);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <form onSubmit={handleLogin} className="p-8 bg-gray-800 rounded-xl shadow-lg flex flex-col gap-4">
                    <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500"
                    />
                    <button type="submit" className="bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400">Login</button>
                    <Link to="/" className="text-center text-sm text-gray-400 hover:text-white">Back to Home</Link>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
                </div>

                {/* Add/Edit Form */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                    <h2 className="text-xl font-semibold mb-4">{editingIndex !== null ? 'Edit Game' : 'Add New Game'}</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Game Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Icon URL</label>
                            <input type="text" name="icon" value={formData.icon} onChange={handleInputChange} placeholder="/game-icons/example.webp" className="mt-1 block w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Type</label>
                            <select name="type" value={formData.type} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded">
                                <option value="Base">Base</option>
                                <option value="Version">Version</option>
                                <option value="Expansion">Expansion</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                            <select name="difficulty" value={formData.difficulty} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Duration</label>
                            <select name="duration" value={formData.duration} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded">
                                <option value="<30">&lt; 30 mins</option>
                                <option value="30-60">30-60 mins</option>
                                <option value="60-90">60-90 mins</option>
                                <option value=">90">&gt; 90 mins</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Players (comma separated, e.g., 2, 3, 4)</label>
                            <input type="text" name="players" value={formData.players} onChange={handleInputChange} placeholder="2, 3, 4" required className="mt-1 block w-full p-2 border rounded" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
                            <input type="text" name="tags" value={formData.tags} onChange={handleInputChange} placeholder="strategy, card game" className="mt-1 block w-full p-2 border rounded" />
                        </div>

                        <div className="md:col-span-2 flex gap-2 mt-4">
                            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                {editingIndex !== null ? 'Update Game' : 'Add Game'}
                            </button>
                            {editingIndex !== null && (
                                <button type="button" onClick={() => {
                                    setEditingIndex(null);
                                    setFormData({
                                        name: '',
                                        type: 'Base',
                                        difficulty: 'Easy',
                                        duration: '<30',
                                        players: '',
                                        icon: '',
                                        default: '/game-icons/default.webp',
                                        tags: ''
                                    });
                                }} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                                    Cancel Edit
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Game List */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Existing Games ({games.length})</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left font-light">
                            <thead className="border-b font-medium">
                                <tr>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4">Difficulty</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...games].reverse().map((game, index) => {
                                    // Original index in the source array needs to be calculated because we reversed for display
                                    const originalIndex = games.length - 1 - index;
                                    return (
                                        <tr key={originalIndex} className="border-b hover:bg-gray-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{game.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{game.type}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {typeof game.difficulty === 'string' ? game.difficulty : 'Complex'}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button onClick={() => handleEdit(originalIndex)} className="text-blue-600 hover:text-blue-800 mr-4">Edit</button>
                                                <button onClick={() => handleDelete(originalIndex)} className="text-red-600 hover:text-red-800">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
